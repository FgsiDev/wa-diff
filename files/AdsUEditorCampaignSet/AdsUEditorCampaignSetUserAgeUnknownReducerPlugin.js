__d(
  "AdsUEditorCampaignSetUserAgeUnknownReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetUserAgeUnknownActionFlux",
    "setUserAgeUnknownMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.campaignIDs == null || t.hostID == null
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  return r("setUserAgeUnknownMutator")(e, t.value);
                });
          },
          [r("AdsUEditorCampaignSetUserAgeUnknownActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
