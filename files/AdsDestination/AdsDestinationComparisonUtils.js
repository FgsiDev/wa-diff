__d(
  "AdsDestinationComparisonUtils",
  ["TokenizeUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o,
        a,
        i =
          (o =
            e == null
              ? void 0
              : e
                  .toLowerCase()
                  .indexOf(n == null ? void 0 : n.toLowerCase())) != null
            ? o
            : -1,
        l = (a = t == null ? void 0 : t.indexOf(n)) != null ? a : -1;
      return i < 0 && l < 0
        ? 0
        : (r("TokenizeUtil").isExactMatch(n, t) && l === 0) ||
            (r("TokenizeUtil").isExactMatch(n, e) && i === 0)
          ? 5
          : r("TokenizeUtil").isExactMatch(n, e)
            ? 4
            : i === 0
              ? 3
              : r("TokenizeUtil").isQueryMatch(n, e)
                ? 2
                : i > 0
                  ? 1
                  : 0;
    }
    l.scoreDestinationAgainstSearch = e;
  },
  98,
);
