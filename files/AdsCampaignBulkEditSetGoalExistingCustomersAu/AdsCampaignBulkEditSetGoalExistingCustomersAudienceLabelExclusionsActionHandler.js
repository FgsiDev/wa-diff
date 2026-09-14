__d(
  "AdsCampaignBulkEditSetGoalExistingCustomersAudienceLabelExclusionsActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSetGoalExistingCustomersAudienceLabelExclusionsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o(
          "AdsUEditorCampaignSetGoalExistingCustomersAudienceLabelExclusionsActionFlux",
        ).actionType,
        fluxInputs: {},
        mutate: function (t, n, a) {
          var e = t.audienceLabels,
            i = t.campaignIDs,
            l = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                i,
              ),
              i,
              function (t) {
                var n = r("immutable").List(e),
                  a = o("AdsCampaignGoalMutationUtils").ensureCampaignGoal(t);
                return r(
                  "AdsCampaignRecordAccessors",
                ).campaign_goal.existing_customers_audience_label_exclusions.set(
                  n,
                  a,
                );
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys")
              .CAMPAIGN_GOAL_EXISTING_CUSTOMER_EXCLUSION,
            i,
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
