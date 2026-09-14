__d(
  "AdsInsightsGraphs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new Set(),
        r = [];
      r.push(t);
      var o = function () {
        if (r.length === 0) return { done: !0 };
        var t = r[0];
        (r.shift(), n.add(t));
        for (var o of e(t)) n.has(o) || r.push(o);
        return { value: t, done: !1 };
      };
      return { next: o };
    }
    i.bfs = e;
  },
  66,
);
