__d(
  "AdsUEditorCampaignSetShopsOnboardingStateReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetShopsOnboardingStateActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, n, function (e, t) {
              return e;
            });
          },
          r("AdsUEditorCampaignSetShopsOnboardingStateActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
