__d(
  "AdsUEditorCampaignSetEndTimeDataReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetEndTimeDataActionFlux",
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
              i = t.campaignIDs,
              l = t.endTime,
              s = a.timezone_id,
              u = r("DateTime").create(l, s).toISOString();
            return o("AdsMutators").mutateEach(e, i, function (e) {
              return r("AdsCampaignRecordAccessors").end_time.set(u, e);
            });
          },
          o("AdsUEditorCampaignSetEndTimeDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
