__d(
  "AdsLoadStatuses_LEGACY",
  ["invariant", "AdsLoadState_LEGACY", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = r("immutable").List([
        (e = r("AdsLoadState_LEGACY")).NOT_LOADED,
        e.LOADING,
        e.ERROR,
        e.LOADED,
      ]),
      c = {};
    u.forEach(function (e, t) {
      return (c[e] = t);
    });
    function d(e) {
      return ((0 <= e && e < u.size) || s(0, 3849, e), u.get(e, "NOT_LOADED"));
    }
    function m(e) {
      var t = _(r("AdsLoadState_LEGACY").LOADED),
        n = _(r("AdsLoadState_LEGACY").NOT_LOADED);
      for (var o of e) if (((n = Math.max(n, _(o))), n === t)) break;
      return d(n);
    }
    function p(e) {
      var t = _(r("AdsLoadState_LEGACY").NOT_LOADED),
        n = _(r("AdsLoadState_LEGACY").LOADED);
      for (var o of e) if (((n = Math.min(n, _(o))), n === t)) break;
      return d(n);
    }
    function _(e) {
      var t = c[e];
      return (typeof t == "number" || s(0, 2284, e), t);
    }
    ((l.max = m), (l.min = p));
  },
  98,
);
