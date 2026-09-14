__d(
  "AdsInsightsDateUtils",
  ["invariant", "DateTime", "isFalsey"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 0;
    function u(t, n) {
      var o = r("isFalsey")(n) ? e : n,
        a = t.split("-");
      a.length === 3 || s(0, 4043);
      var i = Date.UTC(
        parseInt(a[0], 10),
        parseInt(a[1], 10) - 1,
        parseInt(a[2], 10),
      );
      return r("DateTime").fromLegacyArgs(i, e).getEquivalentInTimezone(o);
    }
    l.parseISODate = u;
  },
  98,
);
