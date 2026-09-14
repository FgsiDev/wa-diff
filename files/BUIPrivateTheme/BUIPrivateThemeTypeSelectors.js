__d(
  "BUIPrivateThemeTypeSelectors",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return Object.keys(e.type.scale).reduce(function (t, n) {
        var r = Math.round(e.type.scale[n][0] * e.type.base);
        return (
          (t[n] = {
            fontSize: r,
            lineHeight: Math.round(r * e.type.scale[n][1]),
          }),
          t
        );
      }, {});
    }
    i.fontTypeSelector = e;
  },
  66,
);
