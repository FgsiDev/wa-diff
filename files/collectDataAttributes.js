__d(
  "collectDataAttributes",
  ["DataAttributeUtils", "getContextualParent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "normal";
    function s(t, n, o) {
      var a = {},
        i = [],
        l = n.length,
        s;
      for (s = 0; s < l; ++s) ((a[n[s]] = {}), i.push("data-" + n[s]));
      if (o) for (a[e] = {}, s = 0; s < (o || []).length; ++s) i.push(o[s]);
      for (var u = { tn: "", "tn-debug": "," }, c = t; c; ) {
        if (c.getAttribute != null)
          for (s = 0; s < i.length; ++s) {
            var d = i[s],
              m = r("DataAttributeUtils").getDataAttribute(c, d);
            if (m) {
              if (s >= l) {
                a[e][d] === void 0 && (a[e][d] = m);
                continue;
              }
              var p = JSON.parse(m);
              for (var _ in p)
                u[_] !== void 0
                  ? (a[n[s]][_] === void 0 && (a[n[s]][_] = []),
                    a[n[s]][_].push(p[_]))
                  : a[n[s]][_] === void 0 && (a[n[s]][_] = p[_]);
            }
          }
        c = r("getContextualParent")(c);
      }
      for (var f in a)
        for (var g in u) a[f][g] !== void 0 && (a[f][g] = a[f][g].join(u[g]));
      return a;
    }
    l.default = s;
  },
  98,
);
