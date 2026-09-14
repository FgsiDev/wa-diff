__d(
  "AdsMgmtColumns",
  [
    "invariant",
    "AdsMgmtColumnData",
    "adsMgmtColumnIsValid",
    "adsMgmtTableGetColumnConfigAndDescriptor",
    "mapObject",
    "memoize",
    "memoizeStringOnly",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = {},
      c = function () {
        return (e || (e = r("mapObject")))(r("AdsMgmtColumnData").ids, m);
      },
      d = Object.keys(r("AdsMgmtColumnData").ids),
      m = r("memoizeStringOnly")(function (e) {
        var t = _(e);
        return (t || s(0, 544, e), t);
      });
    function p(e) {
      try {
        return _(e);
      } catch (e) {
        return null;
      }
    }
    function _(e) {
      return r("adsMgmtColumnIsValid")(e)
        ? (u[e] || (u[e] = r("adsMgmtTableGetColumnConfigAndDescriptor")(e)),
          u[e])
        : null;
    }
    var f = r("memoize")(c);
    function g() {
      return d;
    }
    ((l.getConfig = m),
      (l.getConfigOrNullSafely = p),
      (l.getConfigOrNull = _),
      (l.getColumnsByID = f),
      (l.getIDs = g));
  },
  98,
);
