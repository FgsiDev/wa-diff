__d(
  "AdsUEditorCampaignSetStartTimeAndEndTimeReducerPlugin",
  [
    "AdsAccountStore",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetStartTimeAndEndTimeActionFlux",
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
              return (
                u != null &&
                  (n = r("AdsCampaignRecordAccessors").start_time.set(
                    e(u, i),
                    n,
                  )),
                s != null &&
                  (n = r("AdsCampaignRecordAccessors").end_time.set(
                    e(s, i),
                    n,
                  )),
                n
              );
            });
          },
          o("AdsUEditorCampaignSetStartTimeAndEndTimeActionFlux").actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
