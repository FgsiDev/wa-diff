__d(
  "isKeyActivation",
  ["Keys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = 0,
        n = e.charCode,
        o = e.keyCode;
      return (
        n != null && n !== 0 ? (t = n) : o != null && o !== 0 && (t = o),
        [r("Keys").RETURN, r("Keys").SPACE].includes(t)
      );
    }
    l.default = e;
  },
  98,
);
