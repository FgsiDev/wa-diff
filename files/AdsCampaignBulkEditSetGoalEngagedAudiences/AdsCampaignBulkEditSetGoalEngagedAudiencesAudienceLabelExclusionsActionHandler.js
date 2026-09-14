__d(
  "AdsCampaignBulkEditSetGoalEngagedAudiencesAudienceLabelExclusionsActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSetGoalEngagedAudiencesAudienceLabelExclusionsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o(
          "AdsUEditorCampaignSetGoalEngagedAudiencesAudienceLabelExclusionsActionFlux",
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
                ).campaign_goal.engaged_audiences_audience_label_exclusions.set(
                  n,
                  a,
                );
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys")
              .CAMPAIGN_GOAL_AUDIENCE_ENGAGEMENT,
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
