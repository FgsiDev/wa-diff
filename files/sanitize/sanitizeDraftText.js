__d(
  "sanitizeDraftText",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new RegExp("\r", "g");
    function l(t) {
      return t.replace(e, "");
    }
    a.exports = l;
  },
  null,
);
