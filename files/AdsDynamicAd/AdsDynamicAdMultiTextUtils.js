__d(
  "AdsDynamicAdMultiTextUtils",
  ["AdsChildAttachmentsUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("2878");
    }
    var s = function (n) {
      return n == null ||
        !o("AdsChildAttachmentsUtils").isDynamicAdCarouselMediaFormat(n)
        ? !1
        : e();
    };
    ((l.isDynamicAdMultiTextEnabled = e),
      (l.isEligibleDynamicAdForMultiText = s));
  },
  98,
);
