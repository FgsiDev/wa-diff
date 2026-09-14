__d(
  "AdsUEditorPECampaignLiveStatusChangeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorPECampaignLiveStatusChangeActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              a = t.runStatus;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return r("AdsCampaignRecordAccessors").status.set(a, e);
            });
          },
          o("AdsUEditorPECampaignLiveStatusChangeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
