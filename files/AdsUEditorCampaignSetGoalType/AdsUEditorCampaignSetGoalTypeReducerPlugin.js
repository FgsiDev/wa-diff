__d(
  "AdsUEditorCampaignSetGoalTypeReducerPlugin",
  [
    "AdsCampaignGoalMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetGoalTypeActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n,
                a = (n = o("AdsCampaignGoalMutationUtils")).ensureCampaignGoal(
                  e,
                ),
                i = r("AdsCampaignRecordAccessors").campaign_goal.type.get(a),
                l = r("AdsCampaignRecordAccessors").campaign_goal.type.set(
                  t.goalType,
                  a,
                ),
                s = n.clearIrrelevantCampaignGoalSubFields(l, t.goalType),
                u = n.applyAutoCADefaultOnTransitionIntoNCA(s, i, t.goalType);
              return n.applyCustomersLabelDefaultOnTransitionIntoNCA(
                u,
                i,
                t.goalType,
              );
            });
          },
          o("AdsUEditorCampaignSetGoalTypeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
