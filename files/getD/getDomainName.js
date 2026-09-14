__d(
  "getDomainName",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
      return t != null &&
        t.length > 2 &&
        typeof t[2] == "string" &&
        t[2].length > 0
        ? t[2]
        : null;
    }
    i.default = e;
  },
  66,
);
