__d(
  "AdsUEditorCampaignSetGoalExistingCustomersAudienceLabelInclusionsReducerPlugin",
  [
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetGoalExistingCustomersAudienceLabelInclusionsActionFlux",
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
              ).campaign_goal.existing_customers_audience_label_inclusions.set(
                n,
                a,
              );
            });
          },
          o(
            "AdsUEditorCampaignSetGoalExistingCustomersAudienceLabelInclusionsActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
