__d(
  "AdsUEditorAdgroupSetWebsiteSummarySpecMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInterfacesLogger",
    "AdsManagerRelayEnvironment",
    "AdsMutators",
    "AdsUEditorAdgroupSetWebsiteSummarySpecMutatorQuery.graphql",
    "RelayHooks",
    "cr:5315",
    "immutable",
    "justknobx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = r("immutable").List();
      return (
        e == null ||
          e.selling_points.forEach(function (e) {
            var n;
            t = t.push({
              text: (n = e.text) != null ? n : "",
              text_format: e.text_format,
              category: e.category,
              anchor_text: e.anchor_text,
              is_verbatim: e.is_verbatim,
              metadata:
                e.metadata != null
                  ? babelHelpers.extends({}, e.metadata)
                  : null,
            });
          }),
        t
      );
    }
    function u(t, a, l) {
      var u = o("RelayHooks")
        .fetchQuery(
          r("AdsManagerRelayEnvironment"),
          e !== void 0
            ? e
            : (e = n(
                "AdsUEditorAdgroupSetWebsiteSummarySpecMutatorQuery.graphql",
              )),
          { url: l, ad_account_id: a },
        )
        .toPromise();
      r("promiseDone")(
        u.then(
          function (e) {
            var r,
              o,
              a,
              l,
              u =
                e == null
                  ? void 0
                  : e.xfb_creative_metadata_website_summary_fields;
            n("cr:5315").dispatch(
              {
                adgroupIDs: [t],
                sellingPoints: s(u),
                summaryText:
                  (r = u == null || (o = u.reviews) == null ? void 0 : o[0]) !=
                  null
                    ? r
                    : null,
                pageTextSignalsAssetId:
                  (a = u == null ? void 0 : u.page_text_signals_asset_id) !=
                  null
                    ? a
                    : null,
                mgenaiWebsiteEntityId:
                  (l = u == null ? void 0 : u.mgenai_website_entity_id) != null
                    ? l
                    : null,
              },
              {
                line: "101",
                module: "AdsUEditorAdgroupSetWebsiteSummarySpecMutator.js",
                moduleID: i.id,
              },
            );
          },
          function (e) {
            r("AdsInterfacesLogger").log({
              data: { message: e.errorDescription },
              eventName:
                "ads_creative_metadata_website_summary_data_fetch_with_website_url_reducer_error",
            });
          },
        ),
      );
    }
    function c(e, t, n, a) {
      var i,
        l = a
          ? o("AdsMutators").chain(
              r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
                .website_summary_spec.selling_points.delete,
              r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
                .website_summary_spec.summary_text.delete,
              r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
                .website_summary_spec.page_text_signals_asset_id.delete,
              r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
                .website_summary_spec.mgenai_website_entity_id.delete,
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.is_selling_points_available.set(
                !1,
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.is_summary_text_available.set(
                !1,
              ),
            )(e)
          : e,
        s =
          ((i = l.creative) == null ||
          (i = i.creative_sourcing_spec) == null ||
          (i = i.website_summary_spec) == null
            ? void 0
            : i.enroll_status) != null,
        c = s
          ? l
          : o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.enroll_status.set(
                "OPT_IN",
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.website_summary_spec.action_metadata.type.set(
                "DEFAULT",
              ),
            )(l);
      return (a && r("justknobx")._("614") && u(e.id, t, n), c);
    }
    l.setWebsiteSummaryDefaultingAdgroupField = c;
  },
  98,
);
