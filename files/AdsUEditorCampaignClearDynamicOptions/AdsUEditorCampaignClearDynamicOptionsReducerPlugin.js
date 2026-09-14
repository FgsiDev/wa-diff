__d(
  "AdsUEditorCampaignClearDynamicOptionsReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignClearDynamicOptionsActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsDeleteProductAudienceSpecsFromCampaignRecord",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").promoted_object.product_set_id
                  .delete,
                r("adsDeleteProductAudienceSpecsFromCampaignRecord"),
                function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.excluded_product_audience_specs.delete(e);
                },
                r("AdsCampaignRecordAccessors").promoted_object
                  .custom_event_type.delete,
                r("AdsCampaignRecordAccessors").promoted_object.custom_event_str
                  .delete,
              )(e);
            });
          },
          o("AdsUEditorCampaignClearDynamicOptionsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
