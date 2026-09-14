__d(
  "adsUEditorAdgroupEligibleForWebsiteMediaQuerySelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsBulkValueUtils",
    "AdsConnectedSourcesDataProvider",
    "AdsUEditorAdgroupExistingPostCTACommonSelectors",
    "AdsUEditorWebsiteMediaEligibilityQueryProvider",
    "LoadObject",
    "adsCreateSelector",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector",
    "adsUEditorCreativeSiteLinksInitialSourceUrlThunkSelector",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
    "adsUeditorAdgroupDestinationUrlSelector",
    "err",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r("AdsUEditorWebsiteMediaEligibilityQueryProvider").toFluxSelector(),
          r("AdsConnectedSourcesDataProvider").toFluxSelector(),
          o("adsUEditorAdgroupWebsiteMediaExtensionEligibilitySelector")
            .adsUEditorAdgroupWebsiteMediaExtensionEligibilitySilentGKSelector,
          o("adsUEditorCreativeSiteLinksInitialSourceUrlThunkSelector")
            .adsUEditorCreativeSiteLinksInitialSourceUrlThunkSelector,
          o("adsUeditorAdgroupDestinationUrlSelector").adDestinationUrlSelector,
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
          o("AdsUEditorAdgroupExistingPostCTACommonSelectors")
            .existingPostCTABulkObjectSelector,
        ],
        function (t, n, a, l, s, u, c, d) {
          var e;
          if (!l)
            return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
          if (r("justknobx")._("3592")) {
            var m,
              p =
                c == null ||
                (m = c[0]) == null ||
                (m = m.creative) == null ||
                (m = m.creative_sourcing_spec) == null
                  ? void 0
                  : m.website_media_spec;
            if ((p == null ? void 0 : p.enroll_status) != null)
              return r("LoadObject").withValue(!0, { creatorModuleID: i.id });
          }
          var _,
            f = r("gkx")("7613");
          if (
            f &&
            o("AdsAPIAdgroupRecordUtils").isExistingPostAd(
              c == null ? void 0 : c[0],
            )
          ) {
            var g,
              h,
              y,
              C,
              b = d.hasValue()
                ? o("AdsBulkValueUtils").getUniformValue(
                    d.getValueEnforcing().bulkDisplayCTALink,
                  )
                : null,
              v = c == null || (g = c[0]) == null ? void 0 : g.creative;
            _ =
              (h =
                (y = b != null ? b : v == null ? void 0 : v.link_url) != null
                  ? y
                  : v == null || (C = v.creative_sourcing_spec) == null
                    ? void 0
                    : C.source_url) != null
                ? h
                : "";
          } else {
            var S,
              R,
              L,
              E,
              k = r("justknobx")._("3117"),
              I = k
                ? u
                : (S = o("AdsBulkValueUtils").getUniformValue(a.sourceUrl)) !=
                    null
                  ? S
                  : (R = s()) == null || (R = R.getValue()) == null
                    ? void 0
                    : R.url;
            _ =
              I == null || I === ""
                ? (L =
                    c == null || (E = c[0]) == null || (E = E.creative) == null
                      ? void 0
                      : E.link_url) != null
                  ? L
                  : ""
                : I;
          }
          if (_ == null || _ === "") {
            var T, D;
            _ =
              (T =
                c == null ||
                (D = c[0]) == null ||
                (D = D.creative) == null ||
                (D = D.object_story_spec) == null ||
                (D = D.video_data) == null ||
                (D = D.call_to_action) == null ||
                (D = D.value) == null
                  ? void 0
                  : D.link) != null
                ? T
                : "";
          }
          if (_ == null || _ === "")
            return r("LoadObject").withError(r("err")("URL is empty"), {
              creatorModuleID: i.id,
            });
          var x = (e = a.pluginState) == null ? void 0 : e.websiteMediaImages;
          if (x != null && x.size > 0)
            return r("LoadObject").withValue(!0, { creatorModuleID: i.id });
          if (x != null)
            return r("LoadObject").withValue(!1, { creatorModuleID: i.id });
          var $ = parseInt(t.account_id, 10),
            P = n.get({ url: _, adAccountId: $ }).mapValue(function (e) {
              var t, n;
              return (
                ((t =
                  (n = e.xfb_creative_metadata_website_media_fields) == null ||
                  (n = n.media) == null
                    ? void 0
                    : n.length) != null
                  ? t
                  : 0) > 0
              );
            });
          return P;
        },
        {
          name: i.id + ".adsUEditorAdgroupEligibleForWebsiteMediaQuerySelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
