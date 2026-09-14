__d(
  "adsIsEligibleForIntentAtCreativeSetup",
  ["AdsCreativeGenAIEligibilityUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = !1),
        o("AdsCreativeGenAIEligibilityUtils").shouldShowIntentAtBAU()
          ? e
            ? r("gkx")("19399")
            : r("gkx")("6580")
          : !1
      );
    }
    l.default = e;
  },
  98,
);
