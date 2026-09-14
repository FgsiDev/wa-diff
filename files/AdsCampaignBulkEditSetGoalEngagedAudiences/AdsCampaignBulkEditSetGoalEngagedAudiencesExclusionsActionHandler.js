__d(
  "AdsCampaignBulkEditSetGoalEngagedAudiencesExclusionsActionHandler",
  [
    "AdsBulkEditActionHandlerUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignSetGoalEngagedAudiencesExclusionsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorCampaignSetGoalEngagedAudiencesExclusionsActionFlux")
          .actionType,
        fluxInputs: {},
        mutate: function (t, n, a) {
          var e = t.campaignIDs,
            i = t.customAudienceExclusionIDs,
            l = o("AdsMutators").mutateEach(
              o("AdsBulkEditActionHandlerUtils").convertToDraftStoreStateShape(
                n,
                e,
              ),
              e,
              function (e) {
                var t = r("immutable").List(i),
                  n = o("AdsCampaignGoalMutationUtils").ensureCampaignGoal(e);
                return r(
                  "AdsCampaignRecordAccessors",
                ).campaign_goal.engaged_audiences_exclusions.set(t, n);
              },
            );
          return o("AdsBulkEditActionHandlerUtils").mergeState(
            r("AdsCampaignBulkEditColumnKeys")
              .CAMPAIGN_GOAL_AUDIENCE_ENGAGEMENT,
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
