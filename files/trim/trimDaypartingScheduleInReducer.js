__d(
  "trimDaypartingScheduleInReducer",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "CTXDaypartingOnAMUtils",
    "DateTime",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("DateTime").create(e, t).getUnixTimestampSeconds();
    }
    function s(t, n, a, i, l) {
      if (!o("CTXDaypartingOnAMUtils").isScheduleTrimmingEnabled() || l == null)
        return t;
      var s = l;
      return o("AdsMutators").mutateEach(t, n, function (t) {
        var n = t.adset_schedule;
        if (n == null || n.size === 0) return t;
        var l =
            a != null
              ? e(a, s)
              : t.start_time != null
                ? r("DateTime")
                    .fromLegacyArgs(t.start_time, s)
                    .getUnixTimestampSeconds()
                : null,
          u =
            i != null
              ? e(i, s)
              : t.end_time != null
                ? r("DateTime")
                    .fromLegacyArgs(t.end_time, s)
                    .getUnixTimestampSeconds()
                : null;
        if (l == null || u == null) return t;
        var c = o("CTXDaypartingOnAMUtils").getCampaignDateRangeDays(l, u, s);
        if (c.size >= 7) return t;
        var d = n.toJS(),
          m = o("CTXDaypartingOnAMUtils").trimScheduleToCampaignDays(d, c);
        return m == null || m.length === 0
          ? t
          : r("AdsCampaignRecordAccessors").adset_schedule.set(
              r("immutable").fromJS(m),
              t,
            );
      });
    }
    l.default = s;
  },
  98,
);
