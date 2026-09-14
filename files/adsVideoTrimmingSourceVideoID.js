__d(
  "adsVideoTrimmingSourceVideoID",
  ["AdsVideoStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8;
    function s(t) {
      if (t == null) return null;
      for (var n = t, o = 0; o < e; o++) {
        var a,
          i,
          l = r("AdsVideoStore").get(n),
          s =
            (a =
              (i = l == null ? void 0 : l.croppedFromVideoID) != null
                ? i
                : l == null
                  ? void 0
                  : l.trimmedFromVideoID) != null
              ? a
              : l == null
                ? void 0
                : l.overlaidFromVideoID;
        if (s == null || s === n) return n;
        n = s;
      }
      return n;
    }
    function u(e) {
      return e == null ? null : r("AdsVideoStore").get(e);
    }
    ((l.adsVideoTrimmingSourceVideoID = s),
      (l.adsVideoTrimmingPlayedVideo = u));
  },
  98,
);
