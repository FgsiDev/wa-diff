__d(
  "AdsUEditorCampaignGroupSetBudgetScalingExtraBudgetReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetBudgetScalingExtraBudgetActionFlux",
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
                  t.extraBudgetCents != null
                    ? String(
                        o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(
                          t.extraBudgetCents,
                        ),
                      )
                    : t.extraBudgetCents;
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).budget_scaling_extra_budget.set(n, e);
              },
            );
          },
          o("AdsUEditorCampaignGroupSetBudgetScalingExtraBudgetActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
