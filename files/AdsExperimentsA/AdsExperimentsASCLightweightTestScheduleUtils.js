__d(
  "AdsExperimentsASCLightweightTestScheduleUtils",
  ["AdsCampaignRecordAccessors", "AdsMutators", "DateTime", "filterNulls"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adAccount,
        n = e.campaign,
        a = e.isOriginalCampaign,
        i = e.lightweightType,
        l = e.originalCampaigns;
      if (a || i !== "ADVANTAGE_SHOPPING_CAMPAIGN") return null;
      var c = s(l, t),
        d = u(l, t),
        m =
          c != null && c !== n.start_time
            ? r("AdsCampaignRecordAccessors").start_time.set(c)
            : null,
        p = d != null ? r("AdsCampaignRecordAccessors").end_time.set(d) : null;
      return m == null && p == null
        ? null
        : o("AdsMutators").chain.apply(
            o("AdsMutators"),
            r("filterNulls")([m, p]),
          );
    }
    function s(e, t) {
      var n = e.reduce(function (e, n) {
          var o = n.start_time;
          if (o == null) return e;
          var a = r("DateTime").createFromISOString(o, t.timezone_id);
          return e == null || a.isBefore(e) ? a : e;
        }, null),
        o = r("DateTime").now(t.timezone_id);
      return n == null || n.isBefore(o) ? o.toISOString() : n.toISOString();
    }
    function u(e, t) {
      var n = e.reduce(function (e, n) {
          var o = n.end_time;
          if (o == null) return e;
          var a = r("DateTime").createFromISOString(o, t.timezone_id);
          return e == null || a.isAfter(e) ? a : e;
        }, null),
        o = r("DateTime").now(t.timezone_id);
      return n == null || n.isBefore(o) ? null : n.toISOString();
    }
    l.getASCScheduleMutator = e;
  },
  98,
);
