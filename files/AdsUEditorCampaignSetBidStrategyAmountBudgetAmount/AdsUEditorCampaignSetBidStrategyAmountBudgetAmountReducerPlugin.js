__d(
  "AdsUEditorCampaignSetBidStrategyAmountBudgetAmountReducerPlugin",
  [
    "AdsBudgetScalingMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignInstantPublishBidStrategyAmountBudgetAmountActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBidStrategyAmountBudgetAmountActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                a = o("AdsMutators").chain(
                  (n = r("AdsCampaignRecordAccessors")).bid_amount.set(
                    t.bidAmount,
                  ),
                  n.is_autobid.set(!1),
                  n.bid_strategy.set(t.bidStrategy),
                  n.lifetime_budget.set(t.lifetimeBudget),
                  n.daily_budget.set(t.dailyBudget),
                )(e);
              return o(
                "AdsBudgetScalingMutationUtils",
              ).maybeClearCampaignBudgetScalingForBidStrategy(a, t.bidStrategy);
            });
          },
          [
            o("AdsUEditorCampaignSetBidStrategyAmountBudgetAmountActionFlux")
              .actionType,
            r(
              "AdsUEditorCampaignInstantPublishBidStrategyAmountBudgetAmountActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
