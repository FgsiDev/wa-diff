__d(
  "AdsUEditorCampaignInstantPublishScheduleFieldReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignInstantPublishScheduleFieldActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorScheduleOptions",
    "DateTime",
    "adsUEditorAccountSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        { account: r("adsUEditorAccountSelector") },
        function (e, t, n) {
          var a = n.account,
            i = t.campaignIDs,
            l = t.campaignIDScheduleMap,
            s = t.endTime,
            u = t.option,
            d = t.startTime;
          return u ===
            r("AdsUEditorScheduleOptions").ALLOW_MULTIPLE_START_END_PAIR &&
            l != null
            ? o("AdsMutators").mutateEach(e, i, function (e) {
                var t, n;
                return c(
                  (t = l.get(e.id)) == null ? void 0 : t.startTime,
                  (n = l.get(e.id)) == null ? void 0 : n.endTime,
                  e,
                  a,
                  r("AdsUEditorScheduleOptions").END_DATE_NULLABLE,
                );
              })
            : o("AdsMutators").mutateEach(e, i, function (e) {
                return c(d, s, e, a, u);
              });
        },
        o("AdsUEditorCampaignInstantPublishScheduleFieldActionFlux").actionType,
      ),
    };
    function s(e, t, n) {
      var o = null;
      return (
        n != null && e
          ? (o = r("DateTime").create(e, n.timezone_id).toISOString())
          : (o = r("DateTime").localCreate(e).toISOString()),
        r("AdsCampaignRecordAccessors").start_time.set(o, t)
      );
    }
    function u(e, t, n) {
      var o = null;
      return (
        n != null && e != null
          ? (o = r("DateTime").create(e, n.timezone_id).toISOString())
          : e != null && (o = r("DateTime").localCreate(e).toISOString()),
        r("AdsCampaignRecordAccessors").end_time.set(o, t)
      );
    }
    function c(e, t, n, o, a) {
      var i = n;
      return (
        r("isTruthy")(e) && (i = s(e, n, o)),
        (r("isTruthy")(t) ||
          a === r("AdsUEditorScheduleOptions").END_DATE_NULLABLE) &&
          (i = u(t, i, o)),
        i
      );
    }
    var d = e;
    l.default = d;
  },
  98,
);
