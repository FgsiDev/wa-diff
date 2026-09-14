__d(
  "AdsUEditorPromotedObjectSetLeadAdsOffsiteConversionTypeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorPromotedObjectSetLeadAdsOffsiteConversionTypeDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").optimization_goal.set(
                  t.optimizationGoal,
                ),
                function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).promoted_object.lead_ads_offsite_conversion_type.set(
                    t.leadAdsOffsiteConversionType,
                    e,
                  );
                },
              ),
            );
          },
          o(
            "AdsUEditorPromotedObjectSetLeadAdsOffsiteConversionTypeDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
