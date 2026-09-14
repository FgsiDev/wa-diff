__d(
  "withSUITheme",
  [
    "invariant",
    "Bootloader",
    "SUIThemeContext.react",
    "err",
    "hoist-non-react-statics",
    "react",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.forwardRef,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useState,
      f = function (t) {
        var e, n;
        return (e = (n = t.displayName) != null ? n : t.name) != null
          ? e
          : "Component";
      };
    function g(e) {
      var t = f(e);
      function n(n, o) {
        var a = m(r("SUIThemeContext.react")),
          i = y(t, n.theme, a),
          l = _(null),
          s = l[0],
          c = l[1],
          d = i != null ? i : s;
        if (
          (p(
            function () {
              if (d == null) {
                var e = r("Bootloader").loadModules(
                  ["SUIBusinessTheme"],
                  c,
                  "withSUITheme",
                );
                return function () {
                  return e.remove();
                };
              }
            },
            [d],
          ),
          d == null)
        )
          return null;
        var f = u.jsx(e, babelHelpers.extends({}, n, { ref: o, theme: d })),
          g =
            n.preserveThemeFromContext !== !0 &&
            n.theme != null &&
            n.theme !== a;
        return g
          ? u.jsx(r("SUIThemeContext.react").Provider, {
              value: n.theme,
              children: f,
            })
          : f;
      }
      ((n.displayName = n.name + " [from " + i.id + "]"),
        (n.displayName = "withSUITheme(" + t + ")"));
      var o = d(n);
      return (
        r("hoist-non-react-statics")(o, e),
        (o.defaultProps = e.defaultProps),
        o
      );
    }
    function h(e) {
      r("requireWeak")("AdsInterfacesComponentsLogger", function (t) {
        var n = r("err")(
          "Silvertail component " +
            e +
            " was not passed a theme in props or context. See https://fburl.com/silvertail-theme for more details.",
        );
        t.logSUIThemeError(n, e);
      });
    }
    function y(e, t, n) {
      var r = t || n;
      return (r || h(e), r);
    }
    l.default = g;
  },
  98,
);
