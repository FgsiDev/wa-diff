__d(
  "BUIPrivateTypeStyles",
  ["SUITypeStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return r("SUITypeStyle")(
        babelHelpers.extends(
          {
            letterSpacing: e.type.letterSpacing,
            fontFamily: e.type.fontFamily,
          },
          t,
        ),
      );
    }
    function s(t) {
      return function (n) {
        return e(t, n);
      };
    }
    ((l.getTypeStyle = e), (l.createTypeStyleGetter = s));
  },
  98,
);
