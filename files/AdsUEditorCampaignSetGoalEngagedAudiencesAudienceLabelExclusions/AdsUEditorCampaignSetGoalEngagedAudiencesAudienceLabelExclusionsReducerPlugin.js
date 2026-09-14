__d(
  "AdsUEditorCampaignSetGoalEngagedAudiencesAudienceLabelExclusionsReducerPlugin",
  [
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetGoalEngagedAudiencesAudienceLabelExclusionsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = r("immutable").List(t.audienceLabels),
                a = o("AdsCampaignGoalMutationUtils").ensureCampaignGoal(e);
              return r(
                "AdsCampaignRecordAccessors",
              ).campaign_goal.engaged_audiences_audience_label_exclusions.set(
                n,
                a,
              );
            });
          },
          o(
            "AdsUEditorCampaignSetGoalEngagedAudiencesAudienceLabelExclusionsActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
