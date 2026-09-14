__d(
  "AdsUEditorCampaignNewLocationTargetingEditorEnableReducerPlugin",
  [
    "AdsBulkValueUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsNewLocationTargetingEditorPageSetIDsCacheProvider",
    "AdsNewLocationTargetingEditorStateKey",
    "AdsUEditorCampaignNewLocationTargetingEditorEnableActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            cachedPageSetIDsMap: r(
              "AdsNewLocationTargetingEditorPageSetIDsCacheProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var a = t.campaignIDs,
              i = t.defaultPageSetID,
              l = t.flatPageSetID,
              s = t.pageID,
              u = t.parentPageID,
              c = n.cachedPageSetIDsMap,
              d =
                u != null
                  ? c
                      .get(
                        new (r("AdsNewLocationTargetingEditorStateKey"))({
                          bulkCampaignID: o("AdsBulkValueUtils").aggregate(a),
                          pageID: s,
                        }),
                        r("immutable").Map(),
                      )
                      .get(u)
                  : null;
            return o("AdsMutators").mutateEach(e, a, function (e) {
              var t = r(
                "AdsCampaignRecordAccessors",
              ).targeting.geo_locations.delete(e);
              return (
                (t = r(
                  "AdsCampaignRecordAccessors",
                ).targeting.excluded_geo_locations.delete(t)),
                d != null
                  ? o("AdsMutators").chain(
                      r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.place_page_set_ids.set(
                        r("immutable").List([d]),
                      ),
                      r(
                        "AdsCampaignRecordAccessors",
                      ).promoted_object.place_page_set_id.set(d),
                    )(t)
                  : i != null
                    ? o("AdsMutators").chain(
                        r(
                          "AdsCampaignRecordAccessors",
                        ).targeting.place_page_set_ids.set(
                          r("immutable").List([i]),
                        ),
                        r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.place_page_set_id.set(i),
                      )(t)
                    : o("AdsMutators").chain(
                        r(
                          "AdsCampaignRecordAccessors",
                        ).promoted_object.place_page_set_id.set(l),
                        r(
                          "AdsCampaignRecordAccessors",
                        ).targeting.place_page_set_ids.set(
                          r("immutable").List(),
                        ),
                      )(t)
              );
            });
          },
          o("AdsUEditorCampaignNewLocationTargetingEditorEnableActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
