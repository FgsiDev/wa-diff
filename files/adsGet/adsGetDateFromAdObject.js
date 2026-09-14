__d(
  "adsGetDateFromAdObject",
  ["DateConsts", "DateTime", "isFalsey", "unixTimestampFromDate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (r("isFalsey")(t) || r("isFalsey")(e) || e === "-1") return null;
      var n = r("unixTimestampFromDate")(e);
      return r("DateTime").fromLegacyArgs(n * o("DateConsts").MS_PER_SEC, t);
    }
    l.default = e;
  },
  98,
);
