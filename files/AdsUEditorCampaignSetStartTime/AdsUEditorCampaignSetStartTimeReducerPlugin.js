__d(
  "AdsUEditorCampaignSetStartTimeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetStartTimeActionFlux",
    "DateTime",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          { account: r("adsUEditorAccountSelector") },
          function (e, t, n) {
            var a = n.account,
              i = a.timezone_id,
              l = t.startTime;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var t = r("DateTime").create(l, i).toISOString();
              return r("AdsCampaignRecordAccessors").start_time.set(t, e);
            });
          },
          o("AdsUEditorCampaignSetStartTimeActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
