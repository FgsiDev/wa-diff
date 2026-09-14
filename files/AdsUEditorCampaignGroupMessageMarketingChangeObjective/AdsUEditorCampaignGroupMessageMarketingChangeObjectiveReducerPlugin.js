__d(
  "AdsUEditorCampaignGroupMessageMarketingChangeObjectiveReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsPCAUnificationUtils",
    "AdsUEditorCampaignGroupMessageMarketingChangeObjectiveActionFlux",
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
              function (e) {
                var n = r("AdsCampaignGroupRecordAccessors").objective.set(
                  t.newObjective,
                  e,
                );
                return (
                  o(
                    "AdsPCAUnificationUtils",
                  ).isObjectiveEligibleForPCAUnification(t.newObjective) ||
                    (n = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).is_pca_unified.delete(n)),
                  n
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupMessageMarketingChangeObjectiveActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
