__d(
  "adsExperimentsRunWinnerGetBudgetMeta",
  [
    "invariant",
    "AdsAPICampaignGroupRecordUtils",
    "adsCampaignGetBudgetAndType",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t,
        n = e.adObject,
        a = n.daily_budget != null ? Number(n.daily_budget) : null,
        i = n.lifetime_budget != null ? Number(n.lifetime_budget) : null,
        l =
          e.adObjectLevel === "campaign"
            ? o("AdsAPICampaignGroupRecordUtils").getBudgetTypeEnforcing(
                e.adObject,
              )
            : r("adsCampaignGetBudgetAndType")(a, i).mode,
        u = l === "daily",
        c = u ? a : i,
        d = n.id != null ? n.id : n.ad_object_id;
      c != null || s(0, 33886, e.adObjectLevel, d);
      var m = Number((t = n.lifetime_spent) != null ? t : 0);
      return {
        budget: c,
        budgetMode: l,
        isDailyBudget: u,
        lifetimeBudgetSpent: m,
      };
    }
    l.default = e;
  },
  98,
);
