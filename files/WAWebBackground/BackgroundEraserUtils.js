__d(
  "BackgroundEraserUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    function l(t) {
      var n = e.exec(t);
      return n
        ? {
            R: parseInt(n[1], 16),
            G: parseInt(n[2], 16),
            B: parseInt(n[3], 16),
          }
        : { R: 0, G: 0, B: 0 };
    }
    function s(t) {
      return e.exec(t) != null;
    }
    ((i.hexToRgb = l), (i.isHexColor = s));
  },
  66,
);
