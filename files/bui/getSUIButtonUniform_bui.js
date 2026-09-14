__d(
  "getSUIButtonUniform.bui",
  ["BUIPrivateGutterSelector", "BUIPrivateThemeUtils", "SUITypeStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.borderRadius,
        n = e.colors,
        a = e.controls,
        i = e.type,
        l = a.height,
        s = o("BUIPrivateThemeUtils").isGeo(e),
        u = {
          button: r("BUIPrivateGutterSelector")(e, "text"),
          icon: r("BUIPrivateGutterSelector")(e, "iconInline"),
          onlyIcon: r("BUIPrivateGutterSelector")(e, "icon"),
        };
      return {
        borderRadius: t.control,
        height: { short: l.small, normal: l.medium, tall: l.large },
        padding: s
          ? { normal: u, short: u, tall: u }
          : {
              normal: { button: "11px", icon: "7px", onlyIcon: "7px" },
              short: { button: "7px", icon: "3px", onlyIcon: "3px" },
              tall: { button: "19px", icon: "7px", onlyIcon: "11px" },
            },
        typeStyle: {
          letterSpacing: i.letterSpacing,
          color: n.text.default,
          fontSize: r("SUITypeStyle").createSUIFontSize(i.size),
          fontWeight: a.fontWeight,
          fontFamily: i.fontFamily,
          lineHeight: i.lineHeight,
        },
        use: {
          default: a.default,
          confirm: babelHelpers.extends({}, a.confirm, {
            fontWeight: a.fontWeightAlt,
          }),
          special: babelHelpers.extends({}, a.special, {
            fontWeight: a.fontWeightAlt,
          }),
          flat: a.flat,
          flatWhite: a.flatWhite,
        },
      };
    }
    l.default = e;
  },
  98,
);
