__d(
  "AdsImageGenThumbnailEligibilityUtils",
  [
    "AdsCreativeGenAIEligibilityUtils",
    "AdsGenAIMVPFeatureFlags",
    "AdsWizardMediaPickerMultiUploadUtils",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "GEN_AI_CUSTOM";
    function s() {
      return r("gkx")("22527");
    }
    function u() {
      return s()
        ? !0
        : !o("AdsCreativeGenAIEligibilityUtils").isEligibleImageGenInVideoAds(
              null,
              "silent",
              null,
              "AdsImageGenThumbnailEligibilityUtils",
            ) ||
            !o("AdsWizardMediaPickerMultiUploadUtils").isEligibleForMultiUpload(
              "silent",
            ) ||
            !o("AdsGenAIMVPFeatureFlags").isV2IProgLoadMultiUploadEnabled()
          ? !1
          : r("qex")._("2402") === 1;
    }
    ((l.GEN_AI_THUMBNAIL_SOURCE = e),
      (l.isGenAIThumbnailMockEnabled = s),
      (l.isGenAIThumbnailOptionsEligible = u));
  },
  98,
);
