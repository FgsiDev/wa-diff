__d(
  "adsInsights3COCustomEventStatsFields",
  [
    "AdsInsights3COCustomEventResults",
    "adsReportingWebOptimizedCustomEventsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsReportingWebOptimizedCustomEventsSelector")().getValue();
      if (t == null || t.length === 0) return [];
      var n = new Set();
      return (
        t.forEach(function (e) {
          var t = e.dataSourceType,
            r = e.eventNames;
          t === "CRM" &&
            r.forEach(function (e) {
              return n.add(e);
            });
        }),
        Array.from(n).flatMap(function (t) {
          return o("AdsInsights3COCustomEventResults").make3COCustomEventFields(
            t,
            e,
          );
        })
      );
    }
    l.default = e;
  },
  98,
);
