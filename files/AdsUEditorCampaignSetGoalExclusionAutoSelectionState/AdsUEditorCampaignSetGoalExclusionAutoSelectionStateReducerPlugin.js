__d(
  "AdsUEditorCampaignSetGoalExclusionAutoSelectionStateReducerPlugin",
  [
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetGoalExclusionAutoSelectionStateActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = o("AdsCampaignGoalMutationUtils").ensureCampaignGoal(e);
              return r(
                "AdsCampaignRecordAccessors",
              ).campaign_goal.existing_customers_exclusion_auto_selection_state.set(
                t.exclusionAutoSelectionState,
                n,
              );
            });
          },
          o("AdsUEditorCampaignSetGoalExclusionAutoSelectionStateActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
