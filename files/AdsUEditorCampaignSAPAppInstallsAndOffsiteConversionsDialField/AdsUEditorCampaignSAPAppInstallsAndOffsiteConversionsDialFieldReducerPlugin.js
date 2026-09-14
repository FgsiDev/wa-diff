__d(
  "AdsUEditorCampaignSAPAppInstallsAndOffsiteConversionsDialFieldReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSAPAppInstallsAndOffsiteConversionsDialFieldActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return t.multiOptimizationGoalWeight != null
                ? r(
                    "AdsCampaignRecordAccessors",
                  ).multi_optimization_goal_weight.set(
                    t.multiOptimizationGoalWeight,
                    e,
                  )
                : e;
            });
          },
          o(
            "AdsUEditorCampaignSAPAppInstallsAndOffsiteConversionsDialFieldActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
