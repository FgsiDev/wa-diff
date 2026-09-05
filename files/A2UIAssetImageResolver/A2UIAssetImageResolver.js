__d(
  "A2UIAssetImageResolver",
  [
    "A2UIAssetImageResolverQuery.graphql",
    "A2UILoggingContext",
    "RelayHooks",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useMemo,
      m = u.useRef,
      p = u.useState,
      _ = e !== void 0 ? e : (e = n("A2UIAssetImageResolverQuery.graphql"));
    function f(e) {
      var t = o("react-compiler-runtime").c(12),
        n = o("RelayHooks").useRelayEnvironment(),
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {}), (t[0] = r))
        : (r = t[0]);
      var a = p(r),
        i = a[0],
        l = a[1],
        s = o("A2UILoggingContext").useA2UILogger(),
        u = m(s),
        d,
        f;
      (t[1] !== s
        ? ((d = function () {
            u.current = s;
          }),
          (f = [s]),
          (t[1] = s),
          (t[2] = d),
          (t[3] = f))
        : ((d = t[2]), (f = t[3])),
        c(d, f));
      var y;
      t[4] !== e
        ? ((y = e.map(h).join(",")), (t[4] = e), (t[5] = y))
        : (y = t[5]);
      var C = y,
        b;
      t[6] !== C
        ? ((b = C === "" ? [] : C.split(",").map(g)), (t[6] = C), (t[7] = b))
        : (b = t[7]);
      var v = b,
        S,
        R;
      return (
        t[8] !== v || t[9] !== n
          ? ((S = function () {
              if (v.length !== 0) {
                var e = o("RelayHooks")
                  .fetchQuery(n, _, { input: { assets: v } })
                  .subscribe({
                    error: function (t) {
                      u.current.logActionFailure(t.message, {
                        asset_count: String(v.length),
                        operation: "asa_asset_images",
                      });
                    },
                    next: function (t) {
                      var e = {};
                      for (var n of (r = t.asa_asset_images) != null ? r : []) {
                        var r;
                        n.image_url != null && (e[n.asset_id] = n.image_url);
                      }
                      l(e);
                    },
                  });
                return function () {
                  return e.unsubscribe();
                };
              }
            }),
            (R = [n, v]),
            (t[8] = v),
            (t[9] = n),
            (t[10] = S),
            (t[11] = R))
          : ((S = t[10]), (R = t[11])),
        c(S, R),
        i
      );
    }
    function g(e) {
      var t = e.split(":"),
        n = t[0],
        r = t[1];
      return { asset_id: n, asset_type: r };
    }
    function h(e) {
      return e.asset_id + ":" + e.asset_type;
    }
    l.useAssetImageResolver = f;
  },
  98,
);
