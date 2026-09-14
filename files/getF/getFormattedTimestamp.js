__d(
  "getFormattedTimestamp",
  ["DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = "",
        n = e;
      isNaN(n) ? (n = 0) : n < 0 && ((n *= -1), (t = "-"));
      var r = Math.floor(n / o("DateConsts").SEC_PER_HOUR),
        a = Math.floor(
          (n - r * o("DateConsts").SEC_PER_HOUR) / o("DateConsts").SEC_PER_MIN,
        ),
        i = Math.round(
          n -
            r * o("DateConsts").SEC_PER_HOUR -
            a * o("DateConsts").SEC_PER_MIN,
        );
      (i === o("DateConsts").SEC_PER_MIN && ((i = 0), a++),
        a === o("DateConsts").MIN_PER_HOUR && ((a = 0), r++));
      var l = ("0" + i).slice(-2);
      if (r === 0) return "" + t + a + ":" + l;
      var s = ("0" + a).slice(-2);
      return "" + t + r + ":" + s + ":" + l;
    }
    l.default = e;
  },
  98,
);
