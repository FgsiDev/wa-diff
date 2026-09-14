__d(
  "adsUEditorAdgroupEligibleForWebsiteSummaryQuerySelector",
  [
    "AdsBulkValueUtils",
    "AdsConnectedSourcesDataProvider",
    "AdsMetadataConnectedSourcesUtils",
    "AdsUEditorWebsiteSummaryEligibilityQueryProvider",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCreativeSiteLinksInitialSourceUrlSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUeditorAdgroupDestinationUrlSelector",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          o("adsUeditorAdgroupDestinationUrlSelector").adDestinationUrlSelector,
          r(
            "AdsUEditorWebsiteSummaryEligibilityQueryProvider",
          ).toFluxSelector(),
          r("AdsConnectedSourcesDataProvider").toFluxSelector(),
          r("adsCreateThunkSelector")(
            r("adsUEditorCreativeSiteLinksInitialSourceUrlSelector"),
          ),
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
        ],
        function (t, n, a, l, s, u) {
          var e,
            c,
            d,
            m =
              n ||
              o("AdsBulkValueUtils").getUniformValue(l.sourceUrl) ||
              ((e = s()) == null || (e = e.getValue()) == null
                ? void 0
                : e.url),
            p =
              m == null || m === ""
                ? (c =
                    u == null || (d = u[0]) == null || (d = d.creative) == null
                      ? void 0
                      : d.link_url) != null
                  ? c
                  : ""
                : m;
          if (p == null || p === "")
            return (
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).logWebsiteSummaryEmptyURLInGraphqlQuery(),
              r("LoadObject").withError(r("err")("URL is empty"), {
                creatorModuleID: i.id,
              })
            );
          o(
            "AdsMetadataConnectedSourcesUtils",
          ).logWebsiteSummaryGraphqlQueryStartForURL(p, t.account_id);
          var _ = a
            .get({ url: p, ad_account_id: t.account_id })
            .mapValue(function (e) {
              var t, n, r, o;
              return (
                ((t =
                  (n = e.xfb_creative_metadata_website_summary_fields) ==
                    null || (n = n.reviews) == null
                    ? void 0
                    : n.length) != null
                  ? t
                  : 0) > 0 ||
                ((r =
                  (o = e.xfb_creative_metadata_website_summary_fields) ==
                    null || (o = o.selling_points) == null
                    ? void 0
                    : o.length) != null
                  ? r
                  : 0) > 0
              );
            });
          return (
            _.value !== void 0 &&
              o(
                "AdsMetadataConnectedSourcesUtils",
              ).logWebsiteSummaryGraphqlQueryResponseForURL(
                p,
                JSON.stringify({ url: p, hasDataInResponse: _.value }),
              ),
            _
          );
        },
        {
          name:
            i.id + ".adsUEditorAdgroupEligibleForWebsiteSummaryQuerySelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
