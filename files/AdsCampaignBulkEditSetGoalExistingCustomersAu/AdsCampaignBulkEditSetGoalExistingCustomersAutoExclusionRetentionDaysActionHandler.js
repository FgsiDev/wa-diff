__d(
  "AdsCampaignBulkEditSetGoalExistingCustomersAutoExclusionRetentionDaysActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalExpressionUtils",
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSetGoalExistingCustomersAutoExclusionRetentionDaysActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o(
          "AdsUEditorCampaignSetGoalExistingCustomersAutoExclusionRetentionDaysActionFlux",
        ).actionType,
        fluxInputs: {},
        mutate: function (t, n, a) {
          var e = t.campaignIDs,
            i = t.existingCustomersAutoExclusionRetentionDays,
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
                ).campaign_goal.existing_customers_auto_exclusion_retention_days.set(
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
