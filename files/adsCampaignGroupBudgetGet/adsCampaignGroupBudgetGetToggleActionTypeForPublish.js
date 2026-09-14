__d(
  "adsCampaignGroupBudgetGetToggleActionTypeForPublish",
  ["AdsAPICampaignGroupRecordUtils", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.adset_budgets) return "turn_off";
      if (e.adset_bid_amounts) return "bid_strategy_with_bid_amount";
      if (t.hasValue() && t.getValue() != null) {
        var n = r("nullthrows")(t.getValueEnforcing()),
          a = n.bid_strategy,
          i = e.bid_strategy;
        if (a && i && a !== i) return "bid_strategy_without_bid_amount";
        if (
          o("AdsAPICampaignGroupRecordUtils").hasBudget(e) &&
          !o("AdsAPICampaignGroupRecordUtils").hasBudget(n)
        )
          return "turn_on";
      }
      return null;
    }
    l.default = e;
  },
  98,
);
