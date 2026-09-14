__d(
  "getTV2QueryStringCheatcodeValue",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      try {
        var n = new RegExp("\\b" + e + "=([^&]*)"),
          r = n.exec(t.location.search);
        return !r || r[1] == null ? null : r[1];
      } catch (e) {
        return null;
      }
    }
    i.default = e;
  },
  66,
);
