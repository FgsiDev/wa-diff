__d(
  "AdsColumnPresetNameByteUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new TextEncoder();
    function l(t) {
      return e.encode(t).length;
    }
    function s(t, n) {
      if (n <= 0) return "";
      if (e.encode(t).length <= n) return t;
      for (var r = 0, o = 0, a = Array.from(t), i = 0; i < a.length; i++) {
        var l = e.encode(a[i]).length;
        if (o + l > n) break;
        ((o += l), (r += a[i].length));
      }
      return t.slice(0, r);
    }
    ((i.byteLength = l), (i.truncateToMaxBytes = s));
  },
  66,
);
