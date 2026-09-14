__d(
  "AdsUEditorCampaignSetGoalExistingCustomersAutoExclusionRetentionDaysReducerPlugin",
  [
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetGoalExistingCustomersAutoExclusionRetentionDaysActionFlux",
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
              ).campaign_goal.existing_customers_auto_exclusion_retention_days.set(
                t.existingCustomersAutoExclusionRetentionDays,
                n,
              );
            });
          },
          o(
            "AdsUEditorCampaignSetGoalExistingCustomersAutoExclusionRetentionDaysActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
