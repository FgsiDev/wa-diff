__d(
  "SUICloseButtonUniform.business",
  ["ix", "SUIGlyphIcon.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        dark: {
          large: function (t) {
            return u.jsx(
              r("SUIGlyphIcon.react"),
              babelHelpers.extends({}, t, {
                srcDefault: s("499680"),
                srcDisabled: s("490191"),
                srcHover: s("499681"),
              }),
            );
          },
          small: function (t) {
            return u.jsx(
              r("SUIGlyphIcon.react"),
              babelHelpers.extends({}, t, {
                srcDefault: s("499672"),
                srcDisabled: s("490190"),
                srcHover: s("499673"),
              }),
            );
          },
        },
        light: {
          large: function (t) {
            return u.jsx(
              r("SUIGlyphIcon.react"),
              babelHelpers.extends({}, t, {
                srcDefault: s("489948"),
                srcDisabled: s("499675"),
                srcHover: s("499674"),
              }),
            );
          },
          small: function (t) {
            return u.jsx(
              r("SUIGlyphIcon.react"),
              babelHelpers.extends({}, t, {
                srcDefault: s("489947"),
                srcDisabled: s("499667"),
                srcHover: s("499666"),
              }),
            );
          },
        },
        iconSize: { large: 16, small: 12 },
      },
      d = c;
    l.default = d;
  },
  98,
);
