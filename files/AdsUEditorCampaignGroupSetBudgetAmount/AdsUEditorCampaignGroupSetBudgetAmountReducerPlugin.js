__d(
  "AdsUEditorCampaignGroupSetBudgetAmountReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetBudgetAmountActionFlux",
    "FBLogger",
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
                var n =
                  t.budgetType === "daily" ? e.daily_budget : e.lifetime_budget;
                if (n === void 0)
                  return (
                    r("FBLogger")("pe").warn(
                      "trying to change %s, but it hasn't been set",
                      t.budgetType,
                    ),
                    e
                  );
                var a = String(
                  o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(
                    t.budgetAmount,
                  ),
                );
                return t.budgetType === "daily"
                  ? r("AdsCampaignGroupRecordAccessors").daily_budget.set(a, e)
                  : r("AdsCampaignGroupRecordAccessors").lifetime_budget.set(
                      a,
                      e,
                    );
              },
            );
          },
          [
            o("AdsUEditorCampaignGroupSetBudgetAmountActionFlux").actionType,
            o("AdsUEditorCampaignGroupInstantPublishBudgetFieldActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
