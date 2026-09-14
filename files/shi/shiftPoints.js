__d(
  "shiftPoints",
  ["clamp"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = [-1 / 0, 1 / 0]);
      var o = Math.min.apply(Math, e),
        a = Math.max.apply(Math, e),
        i = n,
        l = i[0],
        s = i[1],
        u = s - l,
        c = a - o;
      if (c > u) return e;
      var d = (a + o) / 2,
        m = c / 2,
        p = r("clamp")(d + t, l + m, s - m),
        _ = p - d;
      return e.map(function (e) {
        return e + _;
      });
    }
    l.default = e;
  },
  98,
);
