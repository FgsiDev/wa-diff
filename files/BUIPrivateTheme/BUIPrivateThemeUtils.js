__d(
  "BUIPrivateThemeUtils",
  [
    "BUIPrivateThemeAtomsType",
    "BUIPrivateThemeContext.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext;
    function u(e) {
      return e.id === o("BUIPrivateThemeAtomsType").Themes.BUI_GEODESIC;
    }
    function c(e) {
      return e.id === o("BUIPrivateThemeAtomsType").Themes.BUI_CLASSIC;
    }
    function d() {
      var e = o("react-compiler-runtime").c(2),
        t = s(r("BUIPrivateThemeContext.react")),
        n;
      return (
        e[0] !== t ? ((n = u(t)), (e[0] = t), (e[1] = n)) : (n = e[1]),
        n
      );
    }
    ((l.isGeo = u), (l.isClassic = c), (l.useIsGeoThemeContext = d));
  },
  98,
);
