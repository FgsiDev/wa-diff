__d(
  "AdsUEditorCampaignGroupSetBudgetScalingCostTargetReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetBudgetScalingCostTargetActionFlux",
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
                  t.costTargetCents != null
                    ? String(
                        o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(
                          t.costTargetCents,
                        ),
                      )
                    : t.costTargetCents;
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).budget_scaling_cost_target.set(n, e);
              },
            );
          },
          o("AdsUEditorCampaignGroupSetBudgetScalingCostTargetActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
