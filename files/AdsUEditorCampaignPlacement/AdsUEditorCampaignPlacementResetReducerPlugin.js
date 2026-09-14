__d(
  "AdsUEditorCampaignPlacementResetReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignPlacementResetActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsCampaignPlacementResetMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.eligibilityInformation;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return r("adsCampaignPlacementResetMutator")(e, a);
            });
          },
          [o("AdsUEditorCampaignPlacementResetActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
