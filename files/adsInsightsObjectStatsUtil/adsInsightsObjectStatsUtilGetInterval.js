__d(
  "adsInsightsObjectStatsUtilGetInterval",
  ["invariant", "AdsInsightsField", "LocalDate", "LocalDateInterval"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = e[r("AdsInsightsField").DATE_START],
        n = e[r("AdsInsightsField").DATE_STOP];
      return (
        (t && n) || s(0, 2400),
        r("LocalDateInterval").create(
          r("LocalDate").fromISOString(t),
          r("LocalDate").fromISOString(n).addDays(1),
        )
      );
    }
    l.default = e;
  },
  98,
);
