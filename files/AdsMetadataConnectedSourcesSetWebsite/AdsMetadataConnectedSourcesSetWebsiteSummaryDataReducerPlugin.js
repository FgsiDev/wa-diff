__d(
  "AdsMetadataConnectedSourcesSetWebsiteSummaryDataReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMetadataConnectedSourcesSetWebsiteSummaryDataActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e,
                o = t.sellingPoints,
                a = t.summaryText;
              if (o != null && o.size > 0) {
                ((n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.website_summary_spec.selling_points.set(
                  r("immutable").List(
                    o.map(function (e) {
                      return r("immutable").Map({
                        text: e.text,
                        text_format: e.text_format,
                        anchor_text: e.anchor_text,
                        category: e.category,
                        is_checked: e.is_checked,
                        is_verbatim: e.is_verbatim,
                        metadata:
                          e.metadata != null
                            ? r("immutable").Map(e.metadata)
                            : null,
                      });
                    }),
                  ),
                )(n)),
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.website_summary_spec.is_selling_points_available.set(
                    !0,
                  )(n)));
                var i = t.pageTextSignalsAssetId;
                i != null
                  ? (n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.page_text_signals_asset_id.set(
                      i,
                    )(n))
                  : (n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.page_text_signals_asset_id.delete(
                      n,
                    ));
                var l = t.mgenaiWebsiteEntityId;
                l != null
                  ? (n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.mgenai_website_entity_id.set(
                      l,
                    )(n))
                  : (n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.mgenai_website_entity_id.delete(
                      n,
                    ));
              } else {
                var s;
                ((n = (s = r(
                  "AdsAdgroupRecordAccessors",
                )).creative.creative_sourcing_spec.website_summary_spec.selling_points.delete(
                  n,
                )),
                  (n =
                    s.creative.creative_sourcing_spec.website_summary_spec.is_selling_points_available.set(
                      !1,
                    )(n)),
                  (n =
                    s.creative.creative_sourcing_spec.website_summary_spec.page_text_signals_asset_id.delete(
                      n,
                    )),
                  (n =
                    s.creative.creative_sourcing_spec.website_summary_spec.mgenai_website_entity_id.delete(
                      n,
                    )));
              }
              return (
                a != null && a !== ""
                  ? ((n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.summary_text.set(
                      a,
                    )(n)),
                    (n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.is_summary_text_available.set(
                      !0,
                    )(n)))
                  : ((n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.summary_text.delete(
                      n,
                    )),
                    (n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.creative_sourcing_spec.website_summary_spec.is_summary_text_available.set(
                      !1,
                    )(n))),
                n
              );
            });
          },
          [
            r("AdsMetadataConnectedSourcesSetWebsiteSummaryDataActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
