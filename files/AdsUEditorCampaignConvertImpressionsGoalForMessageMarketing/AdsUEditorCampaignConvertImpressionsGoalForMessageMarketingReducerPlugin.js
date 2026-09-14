__d(
  "AdsUEditorCampaignConvertImpressionsGoalForMessageMarketingReducerPlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignConvertImpressionsGoalForMessageMarketingActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return e.optimization_goal ===
                r("AdsAPIOptimizationGoals").IMPRESSIONS
                ? r("AdsCampaignRecordAccessors").optimization_goal.set(
                    r("AdsAPIOptimizationGoals").REACH,
                  )(e)
                : e;
            });
          },
          r(
            "AdsUEditorCampaignConvertImpressionsGoalForMessageMarketingActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
