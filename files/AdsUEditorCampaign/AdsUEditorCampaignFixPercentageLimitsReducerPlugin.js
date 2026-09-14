__d(
  "AdsUEditorCampaignFixPercentageLimitsReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsMutators",
    "AdsUEditorCampaignGroupSetBudgetAmountActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs;
            return n == null || n.length === 0
              ? e
              : o("AdsMutators").mutateEach(e, n, function (e) {
                  var n,
                    r,
                    a = (n = e.min_budget_spend_percentage) != null ? n : 0,
                    i = (r = e.max_budget_spend_percentage) != null ? r : 0;
                  return a === 0 && i === 0
                    ? e
                    : o(
                        "AdsCampaignGroupBudgetMutationUtils",
                      ).fixCampaignPercentageSpendLimits(
                        e,
                        t.budgetAmount,
                        t.budgetType,
                        a > 0,
                        a > 0 ? a : i,
                      );
                });
          },
          o("AdsUEditorCampaignGroupSetBudgetAmountActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
