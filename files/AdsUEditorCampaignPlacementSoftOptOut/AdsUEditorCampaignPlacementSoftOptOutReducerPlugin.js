__d(
  "AdsUEditorCampaignPlacementSoftOptOutReducerPlugin",
  [
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignPlacementSoftOptOutActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.placementAPISpec;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsPlacementReducerUtils").updatePlacementSoftOptOut(
                e,
                n,
              );
            });
          },
          r("AdsUEditorCampaignPlacementSoftOptOutActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
