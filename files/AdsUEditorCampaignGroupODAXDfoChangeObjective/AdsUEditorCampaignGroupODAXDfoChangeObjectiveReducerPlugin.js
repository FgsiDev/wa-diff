__d(
  "AdsUEditorCampaignGroupODAXDfoChangeObjectiveReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsPCAUnificationUtils",
    "AdsUEditorCampaignGroupODAXDfoChangeObjectiveActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
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
              function (e, n) {
                var a = e;
                return (
                  t.updatedObjective !== a.objective &&
                    (a = r("AdsCampaignGroupRecordAccessors").objective.set(
                      t.updatedObjective,
                      a,
                    )),
                  o(
                    "AdsPCAUnificationUtils",
                  ).isObjectiveEligibleForPCAUnification(t.updatedObjective) ||
                    (a = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).is_pca_unified.delete(a)),
                  a
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupODAXDfoChangeObjectiveActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
