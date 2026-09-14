__d(
  "AdsUEditorCampaignSetBudgetScalingCostTargetReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBudgetScalingCostTargetActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n =
                t.costTargetCents != null
                  ? String(
                      o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(
                        t.costTargetCents,
                      ),
                    )
                  : t.costTargetCents;
              return r(
                "AdsCampaignRecordAccessors",
              ).budget_scaling_cost_target.set(n, e);
            });
          },
          o("AdsUEditorCampaignSetBudgetScalingCostTargetActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
