__d(
  "AdsExperimentsCampaignGroupABTestConfigReducerPlugin",
  [
    "AdsExperimentsCampaignGroupABTestConfigActionFlux",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "isTruthy",
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
                var n = e
                  .set("ab_test_config", {
                    duration_in_seconds: t.durationInSeconds,
                    key_metric: t.keyMetric,
                    test_variable: t.testVariable,
                  })
                  .set("lightweight_split_test_options", {
                    upgrade_solution_ids: t.upgradeSolutionIDs,
                  });
                return (
                  (n = n.delete("lightweight_split_test")),
                  r("isTruthy")(t.isOptedIntoExperiments) &&
                    (n = n.set("is_opted_into_experiments", !0)),
                  n
                );
              },
            );
          },
          o("AdsExperimentsCampaignGroupABTestConfigActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
