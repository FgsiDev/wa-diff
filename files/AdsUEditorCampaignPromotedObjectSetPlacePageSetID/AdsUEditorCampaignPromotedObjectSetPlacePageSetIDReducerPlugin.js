__d(
  "AdsUEditorCampaignPromotedObjectSetPlacePageSetIDReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignPromotedObjectSetPlacePageSetIDDataActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                a = [
                  (n = r("AdsCampaignRecordAccessors")).promoted_object.page_id
                    .delete,
                  n.is_dynamic_creative.delete,
                  n.is_dynamic_creative_optimization.delete,
                  n.is_dynamic_creative_asset_customization.delete,
                  n.frequency_control_specs.delete,
                ];
              return (
                a.push(function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.place_page_set_id.set(t.placePageSetID, e);
                }),
                t.storeSetSelected === !0 &&
                  a.push(
                    r("AdsCampaignRecordAccessors").targeting.geo_locations
                      .delete,
                    r("AdsCampaignRecordAccessors").targeting
                      .excluded_geo_locations.delete,
                    function (e) {
                      return t.setTargetingAsPageSetId === !0
                        ? r(
                            "AdsCampaignRecordAccessors",
                          ).targeting.place_page_set_ids.set(
                            r("immutable").List([t.placePageSetID]),
                            e,
                          )
                        : e;
                    },
                  ),
                o("AdsMutators").chain.apply(o("AdsMutators"), a)(e)
              );
            });
          },
          r("AdsUEditorCampaignPromotedObjectSetPlacePageSetIDDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
