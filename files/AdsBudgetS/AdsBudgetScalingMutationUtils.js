__d(
  "AdsBudgetScalingMutationUtils",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignRecordAccessors",
    "adsBudgetScalingGKUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null && Number(e) > 0;
    }
    function s(t, n) {
      return o("adsBudgetScalingGKUtils").isBidStrategyEligibleForBudgetScaling(
        n,
      ) ||
        (!e(t.budget_scaling_cost_target) && !e(t.budget_scaling_extra_budget))
        ? t
        : r("AdsCampaignGroupRecordAccessors").budget_scaling_cost_target.set(
            "0",
            r(
              "AdsCampaignGroupRecordAccessors",
            ).budget_scaling_extra_budget.set("0", t),
          );
    }
    function u(t, n) {
      return o("adsBudgetScalingGKUtils").isBidStrategyEligibleForBudgetScaling(
        n,
      ) ||
        (!e(t.budget_scaling_cost_target) && !e(t.budget_scaling_extra_budget))
        ? t
        : r("AdsCampaignRecordAccessors").budget_scaling_cost_target.set(
            "0",
            r("AdsCampaignRecordAccessors").budget_scaling_extra_budget.set(
              "0",
              t,
            ),
          );
    }
    function c(t) {
      return !e(t.budget_scaling_cost_target) &&
        !e(t.budget_scaling_extra_budget)
        ? t
        : r("AdsCampaignGroupRecordAccessors").budget_scaling_cost_target.set(
            "0",
            r(
              "AdsCampaignGroupRecordAccessors",
            ).budget_scaling_extra_budget.set("0", t),
          );
    }
    function d(t) {
      return !e(t.budget_scaling_cost_target) &&
        !e(t.budget_scaling_extra_budget)
        ? t
        : r("AdsCampaignRecordAccessors").budget_scaling_cost_target.set(
            "0",
            r("AdsCampaignRecordAccessors").budget_scaling_extra_budget.set(
              "0",
              t,
            ),
          );
    }
    ((l.maybeClearCampaignGroupBudgetScalingForBidStrategy = s),
      (l.maybeClearCampaignBudgetScalingForBidStrategy = u),
      (l.clearCampaignGroupBudgetScaling = c),
      (l.clearCampaignBudgetScaling = d));
  },
  98,
);
