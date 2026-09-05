__d(
  "FBWebBloksBottomSheetNavbarTrailingButton",
  [
    "WebBloksAbstractButton",
    "WebBloksComponentContext",
    "WebBloksEnvironmentContext",
    "react",
    "react-compiler-runtime",
    "useClickablePropsForWebBloks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.objectSet,
        l = o("WebBloksEnvironmentContext").useDataBloksName(),
        u;
      t[0] !== n
        ? ((u = n.get("accessibility_label")), (t[0] = n), (t[1] = u))
        : (u = t[1]);
      var d = u,
        m;
      t[2] !== n ? ((m = n.get("text")), (t[2] = n), (t[3] = m)) : (m = t[3]);
      var p = m,
        _ = n.get("type"),
        f;
      t[4] !== n
        ? ((f = n.getExpression("on_click")), (t[4] = n), (t[5] = f))
        : (f = t[5]);
      var g = r("useClickablePropsForWebBloks")(n, f),
        h = c(i, _),
        y;
      t[6] !== l || t[7] !== n.styleId
        ? ((y = l(n.styleId)), (t[6] = l), (t[7] = n.styleId), (t[8] = y))
        : (y = t[8]);
      var C;
      return (
        t[9] !== d || t[10] !== h || t[11] !== g || t[12] !== y || t[13] !== p
          ? ((C = s.jsx(
              r("WebBloksAbstractButton"),
              babelHelpers.extends(
                { trailing: !0 },
                y,
                { icon: h, title: p, accessibility_label: d },
                g,
              ),
            )),
            (t[9] = d),
            (t[10] = h),
            (t[11] = g),
            (t[12] = y),
            (t[13] = p),
            (t[14] = C))
          : (C = t[14]),
        C
      );
    }
    function c(e, t) {
      switch (t) {
        case "close":
          return e.getAsset("navCross");
        case "overflow":
          return e.getAsset("nav3DotHorizontal");
        case "settings":
          return e.getAsset("settings");
        case "text":
        default:
          return null;
      }
    }
    l.default = u;
  },
  98,
);
