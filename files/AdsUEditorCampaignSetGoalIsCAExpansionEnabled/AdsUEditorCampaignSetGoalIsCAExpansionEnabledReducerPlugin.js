__d(
  "AdsUEditorCampaignSetGoalIsCAExpansionEnabledReducerPlugin",
  [
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetGoalIsCAExpansionEnabledActionFlux",
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
              ).campaign_goal.is_ca_expansion_enabled.set(
                t.isCAExpansionEnabled,
                n,
              );
            });
          },
          o("AdsUEditorCampaignSetGoalIsCAExpansionEnabledActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
