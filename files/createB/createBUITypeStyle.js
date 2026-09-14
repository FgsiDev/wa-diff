__d(
  "createBUITypeStyle",
  ["BUISystemFonts", "SUITypeStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("BUISystemFonts").FONT_FAMILY,
        n = o("BUISystemFonts").LETTER_SPACING;
      return r("SUITypeStyle")(
        babelHelpers.extends({}, e, { fontFamily: t, letterSpacing: n }),
      );
    }
    l.default = e;
  },
  98,
);
