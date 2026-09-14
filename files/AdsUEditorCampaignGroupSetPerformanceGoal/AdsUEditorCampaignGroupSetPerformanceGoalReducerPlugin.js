__d(
  "AdsUEditorCampaignGroupSetPerformanceGoalReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetPerformanceGoalActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).advertiser_intent.performance_goal.set(t.performanceGoal, e);
              },
            );
          },
          o("AdsUEditorCampaignGroupSetPerformanceGoalActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
