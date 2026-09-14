__d(
  "AdsImageCollectionViews",
  ["invariant", "enumObjectKeys", "nullthrows"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = ["LIBRARY", "PAGE", "SCRAPED", "STOCK"],
      c = {};
    (u.forEach(function (e, t) {
      c[e] = 1 << t;
    }),
      (c.INVISIBLE = 0));
    var d = {};
    (r("enumObjectKeys")(c).forEach(function (e) {
      var t = c[e];
      t != null && (d[t] = t);
    }),
      (c.ALL = (1 << u.length) - 1));
    function m(e) {
      return e in d;
    }
    function p(e) {
      return e >= 0 && e <= r("nullthrows")(c.ALL);
    }
    function _(e) {
      m(e) || s(0, 4465, e);
    }
    function f(e) {
      p(e) || s(0, 4466, e);
    }
    var g = {
      ALL: (e = r("nullthrows"))(c.ALL),
      INVISIBLE: e(c.INVISIBLE),
      LIBRARY: e(c.LIBRARY),
      PAGE: e(c.PAGE),
      SCRAPED: e(c.SCRAPED),
      STOCK: e(c.STOCK),
    };
    ((l.isValidView = m),
      (l.isValidViewBitmask = p),
      (l.assertIsValidView = _),
      (l.assertIsValidViewBitmask = f),
      (l.views = g));
  },
  98,
);
