__d(
  "deleteByPath",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      for (var n = e, r = 0; r < t.length; r++) {
        var o = t[r];
        if (n && Object.prototype.hasOwnProperty.call(n, o))
          if (r === t.length - 1) delete n[o];
          else if (typeof n[o] == "object") n = n[o];
          else return e;
        else return e;
      }
      return e;
    }
    i.default = e;
  },
  66,
);
