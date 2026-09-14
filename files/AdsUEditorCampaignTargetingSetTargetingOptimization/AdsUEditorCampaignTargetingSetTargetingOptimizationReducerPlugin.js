__d(
  "AdsUEditorCampaignTargetingSetTargetingOptimizationReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignTargetingReducerUtils",
    "AdsUEditorCampaignTargetingSetTargetingOptimizationActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignTargetingReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.campaignIDs == null || t.hostID == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  return t.targetingOptimization != null
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.targeting_optimization.set(
                        t.targetingOptimization,
                        e,
                      )
                    : r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.targeting_optimization.delete(e);
                });
          },
          o("AdsUEditorCampaignTargetingSetTargetingOptimizationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
