__d(
  "fastDeepCopy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return typeof e == "object" && e !== null ? l(e) : e;
    }
    function l(e) {
      var t = typeof e.constructor == "function" ? e.constructor() : {};
      if (Array.isArray(e))
        for (var n = 0; n < e.length; ++n) {
          var r = e[n];
          t[n] = typeof r == "object" && r !== null ? l(r) : r;
        }
      else
        for (var o in e) {
          var a = e[o];
          t[o] = typeof a == "object" && a !== null ? l(a) : a;
        }
      return t;
    }
    i.default = e;
  },
  66,
);
