__d(
  "AdsInteractionTracingUtils",
  ["InteractionTracingMetrics"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t.string)
        for (var n = t.string, o = Object.keys(n), a = 0; a < o.length; a++) {
          var i = n[o[a]];
          i != null && r("InteractionTracingMetrics").addMetadata(e, o[a], i);
        }
      if (t.int)
        for (var l = t.int, s = Object.keys(l), u = 0; u < s.length; u++) {
          var c = l[s[u]];
          c != null && r("InteractionTracingMetrics").addMetadata(e, s[u], c);
        }
      if (t.double)
        for (var d = t.double, m = Object.keys(d), p = 0; p < m.length; p++) {
          var _ = d[m[p]];
          _ != null && r("InteractionTracingMetrics").addMetadata(e, m[p], _);
        }
      if (t.bool)
        for (var f = t.bool, g = Object.keys(f), h = 0; h < g.length; h++) {
          var y = f[g[h]];
          y != null &&
            r("InteractionTracingMetrics").addMetadata(
              e,
              g[h],
              y === !0 ? 1 : 0,
            );
        }
      if (t.string_array)
        for (
          var C = t.string_array,
            b = Object.keys(C),
            v = function (n) {
              var t = C[b[n]];
              t != null &&
                t.forEach(function (t) {
                  return r("InteractionTracingMetrics").addTag(e, b[n], t);
                });
            },
            S = 0;
          S < b.length;
          S++
        )
          v(S);
    }
    l.annotateInteraction = e;
  },
  98,
);
