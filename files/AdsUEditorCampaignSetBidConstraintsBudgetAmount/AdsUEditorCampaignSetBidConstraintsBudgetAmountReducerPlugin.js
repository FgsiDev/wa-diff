__d(
  "AdsUEditorCampaignSetBidConstraintsBudgetAmountReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignInstantPublishBidConstraintsBudgetAmountActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBidConstraintsBudgetAmountActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n;
              return o("AdsMutators").chain(
                (n = r("AdsCampaignRecordAccessors")).bid_strategy.set(
                  t.bidStrategy,
                ),
                n.bid_constraints.set(t.bidConstraints),
                n.is_autobid.set(!1),
                n.bid_amount.delete,
                n.lifetime_budget.set(t.lifetimeBudget),
                n.daily_budget.set(t.dailyBudget),
              )(e);
            });
          },
          [
            r("AdsUEditorCampaignSetBidConstraintsBudgetAmountActionFlux")
              .actionType,
            r(
              "AdsUEditorCampaignInstantPublishBidConstraintsBudgetAmountActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
