__d(
  "AdsUEditorCampaignSetGoalEngagedAudiencesExclusionsReducerPlugin",
  [
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetGoalEngagedAudiencesExclusionsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n =
                  t.customAudienceExclusionIDs.length > 0
                    ? r("immutable").List(t.customAudienceExclusionIDs)
                    : r("immutable").List(),
                a = o("AdsCampaignGoalMutationUtils").ensureCampaignGoal(e);
              return r(
                "AdsCampaignRecordAccessors",
              ).campaign_goal.engaged_audiences_exclusions.set(n, a);
            });
          },
          o("AdsUEditorCampaignSetGoalEngagedAudiencesExclusionsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
