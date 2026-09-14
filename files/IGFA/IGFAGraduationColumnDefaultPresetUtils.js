__d(
  "IGFAGraduationColumnDefaultPresetUtils",
  ["AdsCommonIGFAGraduationAudienceUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("11091");
    }
    function s(e) {
      return e ? r("qex")._("2053") === !0 : r("qex")._("3028") === !0;
    }
    function u(e) {
      return (
        o(
          "AdsCommonIGFAGraduationAudienceUtils",
        ).isInIGFAGraduationEligibleAudience() && s(e)
      );
    }
    ((l.shouldSkipPrevSelectedColumnForDogfooding = e),
      (l.isEligibleForIGFAGraduationDefaultColumnPreset = u));
  },
  98,
);
