__d(
  "AdsCampaignBulkEditSetGoalExclusionAutoSelectionStateActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalExpressionUtils",
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSetGoalExclusionAutoSelectionStateActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o(
          "AdsUEditorCampaignSetGoalExclusionAutoSelectionStateActionFlux",
        ).actionType,
        fluxInputs: {},
        mutate: function (t, n, a) {
          var e = t.campaignIDs,
            i = t.exclusionAutoSelectionState,
            l = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                e,
              ),
              e,
              function (e) {
                var t = o("AdsCampaignGoalMutationUtils").ensureCampaignGoal(e);
                return r(
                  "AdsCampaignRecordAccessors",
                ).campaign_goal.existing_customers_exclusion_auto_selection_state.set(
                  i,
                  t,
                );
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            o("AdsCampaignGoalExpressionUtils").shouldSplitExclusionSection()
              ? r("AdsCampaignBulkEditColumnKeys")
                  .CAMPAIGN_GOAL_EXISTING_CUSTOMER_EXCLUSION
              : r("AdsCampaignBulkEditColumnKeys")
                  .CAMPAIGN_GOAL_EXCLUDE_AUDIENCES,
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
