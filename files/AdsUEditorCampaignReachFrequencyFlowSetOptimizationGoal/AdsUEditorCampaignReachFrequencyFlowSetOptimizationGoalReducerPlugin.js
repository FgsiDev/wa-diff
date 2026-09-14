__d(
  "AdsUEditorCampaignReachFrequencyFlowSetOptimizationGoalReducerPlugin",
  [
    "AdsBuyingTypes",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsReachFrequencyOptimizationGoalHelper",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReachFrequencyFlowSetOptimizationGoalActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            buyingTypes: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getBuyingType,
            ),
          },
          function (e, t, n) {
            var a = n.buyingTypes;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                if (a.get(n) !== r("AdsBuyingTypes").RESERVED) return e;
                var i = r(
                  "AdsReachFrequencyOptimizationGoalHelper",
                ).getDestinationForOptimizationGoal(
                  t.objective,
                  t.optimizationGoal,
                );
                return o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").optimization_goal.set(
                    t.optimizationGoal,
                  ),
                  i != null
                    ? r("AdsCampaignRecordAccessors").destination_type.set(i)
                    : r("AdsCampaignRecordAccessors").destination_type.delete,
                )(e);
              },
            );
          },
          r("AdsUEditorCampaignReachFrequencyFlowSetOptimizationGoalActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
