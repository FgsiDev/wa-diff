__d(
  "getSUITooltipUniform.bui",
  ["cssVar", "BUIPrivateThemeUtils", "BUIPrivateTypeStyles"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = o("BUIPrivateThemeUtils").isGeo(e),
        n = o("BUIPrivateTypeStyles").createTypeStyleGetter(e);
      return {
        backgroundColor: t ? e.colors.layers.background : "#1C1E21",
        borderRadius: e.borderRadius.container,
        boxShadow: t ? e.elevation.depth2 : "none",
        color: t ? e.colors.text.default : "#FFFFFF",
        showArrow: !t,
        typeStyle: n({
          color: t ? e.colors.text.default : "#FFFFFF",
          fontSize: t ? "14px" : "12px",
          fontWeight: t ? "normal" : "bold",
        }),
      };
    }
    l.default = e;
  },
  98,
);
