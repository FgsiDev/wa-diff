__d(
  "AdsUEditorCampaignUpdateScheduleReducerPlugin",
  [
    "AdsAccountStore",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignUpdateScheduleActionFlux",
    "DateTime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("DateTime").create(e, t).toISOString();
    }
    var s = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          { timezoneID: r("AdsAccountStore").getTimezoneID },
          function (t, n, a) {
            var i = a.timezoneID,
              l = n.campaignIDs,
              s = n.endTime,
              u = n.startTime;
            return o("AdsMutators").mutateEach(t, l, function (t) {
              var n = t;
              if (u != null) {
                var o = e(u, i);
                o !== t.start_time &&
                  (n = r("AdsCampaignRecordAccessors").start_time.set(o, n));
              }
              if (s != null) {
                var a = e(s, i);
                a !== t.end_time &&
                  (n = r("AdsCampaignRecordAccessors").end_time.set(a, n));
              } else n = r("AdsCampaignRecordAccessors").end_time.delete(n);
              return n;
            });
          },
          o("AdsUEditorCampaignUpdateScheduleActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
