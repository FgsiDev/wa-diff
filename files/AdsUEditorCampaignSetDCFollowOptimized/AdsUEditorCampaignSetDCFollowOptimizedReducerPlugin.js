__d(
  "AdsUEditorCampaignSetDCFollowOptimizedReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetDCFollowOptimizedActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r("AdsCampaignRecordAccessors").is_dc_follow_optimized.set(
                t.isDCFollowOptimized,
                e,
              );
            });
          },
          o("AdsUEditorCampaignSetDCFollowOptimizedActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
