__d(
  "AdsUEditorCampaignSetStatusReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetStatusActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r("AdsCampaignRecordAccessors").status.set(t.status, e);
            });
          },
          o("AdsUEditorCampaignSetStatusActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
