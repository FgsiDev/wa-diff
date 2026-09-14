__d(
  "AdsImageCoordinatesUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (n == null || n <= 0)
        return [
          [0, 0],
          [e, t],
        ];
      var r, o;
      e / n > t ? ((o = t), (r = t * n)) : ((r = e), (o = e / n));
      var a = (e - r) / 2,
        i = (t - o) / 2,
        l = Math.floor(a) - a,
        s = Math.floor(i) - i;
      return [
        [a + l, i + s],
        [Math.round(a + r + l), Math.round(i + o + s)],
      ];
    }
    function l(e) {
      var t,
        n,
        r,
        o,
        a = [
          e == null || (t = e[0]) == null ? void 0 : t[0],
          e == null || (n = e[0]) == null ? void 0 : n[1],
          e == null || (r = e[1]) == null ? void 0 : r[0],
          e == null || (o = e[1]) == null ? void 0 : o[1],
        ];
      return !a.every(function (e) {
        return e != null;
      });
    }
    ((i.calculateDefaultCoordinates = e), (i.isAnyCoordinateNull = l));
  },
  66,
);
