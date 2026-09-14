__d(
  "PolarisSponsoredTextWidthUtils",
  ["memoize"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 13,
      s = "",
      u = r("memoize")(function () {
        var e = document.createElement("canvas");
        return e.getContext("2d");
      });
    function c(e, t, n, r) {
      for (var o = 0, a = e.length - 1; o <= a; ) {
        var i = Math.floor((o + a) / 2),
          l = e.slice(0, i + 1).join(s);
        d(l, t, n) <= r ? (o = i + 1) : (a = i - 1);
      }
      return o;
    }
    function d(t, n, r) {
      var o = u();
      if (o == null) return e;
      o.font = n;
      var a = r != null ? t.replace(" ", "").length * r : 0,
        i = o.measureText(t);
      return i.width + a;
    }
    ((l.getMaxWordIndexForWidth = c), (l.getTextWidthForAdPreviewCaption = d));
  },
  98,
);
