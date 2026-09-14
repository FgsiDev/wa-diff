__d(
  "stringToArrayBuffer",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (
        var t = new ArrayBuffer(e.length * 2),
          n = new Uint8Array(t),
          r = 0,
          o = e.length;
        r < o;
        r++
      )
        n[r] = e.charCodeAt(r);
      return t;
    }
    i.default = e;
  },
  66,
);
