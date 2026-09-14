__d(
  "SUITypeStyle",
  ["UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("UserAgent").isPlatform("Windows") ? "" : "0.01em",
      s = { letterSpacing: e },
      u = {
        "40px": "50px",
        "32px": "40px",
        "24px": "30px",
        "16px": "20px",
        "14px": "18px",
        "13px": "16px",
        "12px": "16px",
        "11px": "14px",
      };
    function c(e) {
      return e + "px";
    }
    function d(e) {
      return babelHelpers.extends({}, s, e, { lineHeight: u[e.fontSize] });
    }
    ((d.createSUIFontSize = c), (l.default = d));
  },
  98,
);
