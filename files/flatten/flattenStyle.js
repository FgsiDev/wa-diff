__d(
  "flattenStyle",
  ["mapObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if (t == null || t === !1) return null;
      if (!Array.isArray(t))
        return (e || (e = r("mapObject"))).untyped(t, function (e, t) {
          return u(e, t);
        });
      for (var n = {}, o = 0, a = t.length; o < a; ++o) {
        var i = s(t[o]);
        if (i) for (var l in i) n[l] = i[l];
      }
      return n;
    }
    function u(e, t) {
      return t === "lineHeight" && typeof e == "number" ? e + "px" : e;
    }
    l.default = s;
  },
  98,
);
