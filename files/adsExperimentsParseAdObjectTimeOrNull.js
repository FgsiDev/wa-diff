__d(
  "adsExperimentsParseAdObjectTimeOrNull",
  ["DateTime", "Timezone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e == null || e === "") return null;
      var n = r("DateTime").createFromISOString(e, t);
      if (!Number.isFinite(n.instant)) return null;
      var a = o("Timezone").getTransitions(t);
      if (a.length === 0) return null;
      var i = a[0].start,
        l = a[a.length - 1].start;
      return n.instant < i || n.instant >= l ? null : n;
    }
    l.default = e;
  },
  98,
);
