__d(
  "AdsUEditorCampaignSetBudgetScalingExtraBudgetReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetBudgetScalingExtraBudgetActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n =
                t.extraBudgetCents != null
                  ? String(
                      o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(
                        t.extraBudgetCents,
                      ),
                    )
                  : t.extraBudgetCents;
              return r(
                "AdsCampaignRecordAccessors",
              ).budget_scaling_extra_budget.set(n, e);
            });
          },
          o("AdsUEditorCampaignSetBudgetScalingExtraBudgetActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
