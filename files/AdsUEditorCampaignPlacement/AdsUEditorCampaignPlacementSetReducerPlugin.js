__d(
  "AdsUEditorCampaignPlacementSetReducerPlugin",
  [
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignMutators",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              r = t.eligibilityInformation;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                o("AdsUEditorCampaignMutators").updateBundledSettings(e, r),
              );
            });
          },
          o("AdsUEditorCampaignPlacementSetActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
