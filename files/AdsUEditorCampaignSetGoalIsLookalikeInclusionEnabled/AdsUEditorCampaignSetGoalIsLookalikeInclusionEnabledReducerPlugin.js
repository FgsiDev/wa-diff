__d(
  "AdsUEditorCampaignSetGoalIsLookalikeInclusionEnabledReducerPlugin",
  [
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetGoalIsLookalikeInclusionEnabledActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = o("AdsCampaignGoalMutationUtils").ensureCampaignGoal(e),
                a = r(
                  "AdsCampaignRecordAccessors",
                ).campaign_goal.is_lookalike_inclusion_enabled.set(
                  t.isLookalikeInclusionEnabled,
                  n,
                ),
                i = r("AdsCampaignRecordAccessors").campaign_goal.type.get(a);
              return i == null
                ? a
                : o(
                    "AdsCampaignGoalMutationUtils",
                  ).clearIrrelevantCampaignGoalSubFields(a, i);
            });
          },
          o("AdsUEditorCampaignSetGoalIsLookalikeInclusionEnabledActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
