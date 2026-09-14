__d(
  "AdsUEditorCampaignGroupSetBidStrategyReducerPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsBudgetScalingMutationUtils",
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetBidStrategyActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                var n = o(
                  "AdsCampaignGroupBudgetMutationUtils",
                ).setCampaignGroupBidStrategyAndLegacyFlags(e, t.bidStrategy);
                return (
                  t.bidStrategy !==
                    r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP &&
                    (n = o(
                      "AdsCampaignGroupBudgetMutationUtils",
                    ).maybeResetTargetFrequencyToCap(n)),
                  (n = o(
                    "AdsBudgetScalingMutationUtils",
                  ).maybeClearCampaignGroupBudgetScalingForBidStrategy(
                    n,
                    t.bidStrategy,
                  )),
                  n
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupSetBidStrategyActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
