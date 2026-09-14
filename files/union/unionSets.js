__d(
  "unionSets",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      for (
        var e = new Set(), t = arguments.length, n = new Array(t), r = 0;
        r < t;
        r++
      )
        n[r] = arguments[r];
      for (var o of n) for (var a of o) e.add(a);
      return e;
    }
    i.default = e;
  },
  66,
);
