__d(
  "AdsProfileVisitSABRBudgetUtils",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignMutatorUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "adsCampaignIsCampaignGroupBudget",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = o("AdsCampaignMutatorUtils").resetCampaignSchedule(e, t, "daily");
      if (
        r("adsCampaignIsCampaignGroupBudget")(i.daily_budget, i.lifetime_budget)
      )
        return i;
      var l = o("AdsCampaignBudgetMutationUtils").getDefaultBudgetByBudgetMode(
        "daily",
        n,
        a,
        e.currency,
        null,
        e,
      );
      return o("AdsMutators").chain(
        r("AdsCampaignRecordAccessors").daily_budget.set(l),
        r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
      )(i);
    }
    l.setDefaultBudgetForCampaign = e;
  },
  98,
);
