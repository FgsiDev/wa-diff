__d(
  "BUIPrivateAlphaTransformer",
  ["BUIPrivateFocusLevelType", "memoizeWithArgsWeak"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { hover: 0.05, focus: 0.05, pressed: 0.2 },
      s = { default: 0, active: 0.1, disabled: 0 },
      u = function (n, a) {
        return r("memoizeWithArgsWeak")(function (t, r) {
          var i = n[0],
            l = n[1],
            u = n[2],
            c = t != null ? s[t] : 0,
            d =
              t !==
                o("BUIPrivateFocusLevelType").BUIElementStateType.disabled &&
              r != null
                ? e[r]
                : 0,
            m = a + c + d;
          return "rgba(" + i + ", " + l + ", " + u + ", " + m.toFixed(2) + ")";
        });
      };
    l.getAlphaTransformer = u;
  },
  98,
);
