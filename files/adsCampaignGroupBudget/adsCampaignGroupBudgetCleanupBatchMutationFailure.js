__d(
  "adsCampaignGroupBudgetCleanupBatchMutationFailure",
  ["AdsCampaignGroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch (t) {
        case "turn_off":
          e = r("AdsCampaignGroupRecordAccessors").adset_budgets.delete(e);
          break;
        case "bid_strategy_with_bid_amount":
          e = o("AdsMutators").chain(
            r("AdsCampaignGroupRecordAccessors").adset_bid_amounts.delete,
            r("AdsCampaignGroupRecordAccessors").bid_strategy.delete,
          )(e);
          break;
        case "bid_strategy_without_bid_amount":
          e = r("AdsCampaignGroupRecordAccessors").bid_strategy.delete(e);
          break;
        case "turn_on":
          e = o("AdsMutators").chain(
            r("AdsCampaignGroupRecordAccessors").daily_budget.delete,
            r("AdsCampaignGroupRecordAccessors").lifetime_budget.delete,
          )(e);
      }
      return e;
    }
    l.default = e;
  },
  98,
);
