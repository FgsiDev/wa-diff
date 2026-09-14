__d(
  "AdsColorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (var t = e.split(",").map(Number), n = 0; n < 3; n++) {
        var r = t[n];
        ((r /= 255),
          (r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4)),
          (t[n] = r));
      }
      return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
    }
    function l(t, n) {
      var r = [t, n].map(e),
        o = r[0],
        a = r[1],
        i = o > a ? [o, a] : [a, o],
        l = i[0],
        s = i[1],
        u = (l + 0.05) / (s + 0.05);
      return Math.floor(u * 100) / 100;
    }
    function s(e) {
      var t = e.split(",").map(Number),
        n = t[0],
        r = t[1],
        o = t[2],
        a = t[3],
        i = [n, r, o].map(function (e) {
          return e / 255;
        }),
        l = i[0],
        s = i[1],
        u = i[2],
        c = Math.max(l, s, u),
        d = Math.min(l, s, u),
        m = c - d,
        p = 0;
      m === 0
        ? (p = 0)
        : l === c
          ? (p = 60 * (((s - u) / m) % 6))
          : s === c
            ? (p = 60 * ((u - l) / m + 2))
            : u === c && (p = 60 * ((l - s) / m + 4));
      var _ = c === 0 ? 0 : m / c,
        f = c;
      return [p, _, f, a];
    }
    function u(e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        o = e[3],
        a = r * n,
        i = a * (1 - Math.abs(((t / 60) % 2) - 1)),
        l = r - a,
        s = [0, 0, 0];
      return (
        t < 60
          ? (s = [a, i, 0])
          : t < 120
            ? (s = [i, a, 0])
            : t < 180
              ? (s = [0, a, i])
              : t < 240
                ? (s = [0, i, a])
                : t < 300
                  ? (s = [i, 0, a])
                  : t < 360 && (s = [a, 0, i]),
        s
          .map(function (e) {
            return Math.ceil((e + l) * 255);
          })
          .concat(o)
          .join(",")
      );
    }
    ((i.contrastRatio = l), (i.rgbaToHsva = s), (i.hsvaToRgba = u));
  },
  66,
);
