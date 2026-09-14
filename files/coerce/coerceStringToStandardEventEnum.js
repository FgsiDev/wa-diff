__d(
  "coerceStringToStandardEventEnum",
  ["StandardEventsEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null || typeof e != "string") return null;
      var t = Object.entries(r("StandardEventsEnum")).find(function (t) {
        var n = t[0],
          r = t[1];
        return e === r;
      });
      return t != null ? r("StandardEventsEnum")[t[0]] : null;
    }
    l.default = e;
  },
  98,
);
