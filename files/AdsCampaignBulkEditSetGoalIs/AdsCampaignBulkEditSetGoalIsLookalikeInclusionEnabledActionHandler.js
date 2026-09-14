__d(
  "AdsCampaignBulkEditSetGoalIsLookalikeInclusionEnabledActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSetGoalIsLookalikeInclusionEnabledActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o(
          "AdsUEditorCampaignSetGoalIsLookalikeInclusionEnabledActionFlux",
        ).actionType,
        fluxInputs: {},
        mutate: function (t, n, a) {
          var e = t.campaignIDs,
            i = t.isLookalikeInclusionEnabled,
            l = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                e,
              ),
              e,
              function (e) {
                var t = o("AdsCampaignGoalMutationUtils").ensureCampaignGoal(e),
                  n = r(
                    "AdsCampaignRecordAccessors",
                  ).campaign_goal.is_lookalike_inclusion_enabled.set(i, t),
                  a = r("AdsCampaignRecordAccessors").campaign_goal.type.get(n);
                return a == null
                  ? n
                  : o(
                      "AdsCampaignGoalMutationUtils",
                    ).clearIrrelevantCampaignGoalSubFields(n, a);
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys")
              .CAMPAIGN_GOAL_LOOKALIKE_INCLUSION,
            e,
            n,
            l,
            r("AdsCampaignRecordAccessors").campaign_goal.get,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
