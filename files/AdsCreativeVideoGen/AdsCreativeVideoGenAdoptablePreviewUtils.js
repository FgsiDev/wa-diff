__d(
  "AdsCreativeVideoGenAdoptablePreviewUtils",
  ["AdsCreativeGenAIEligibilityUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = 2,
      u = 1,
      c = 2;
    function d(e) {
      return (
        e === void 0 && (e = !0),
        o("AdsCreativeGenAIEligibilityUtils").getImageAdoptersUpsellTreatment(
          e,
        ) === u
      );
    }
    function m(e) {
      return (
        e === void 0 && (e = !0),
        o("AdsCreativeGenAIEligibilityUtils").getImageAdoptersUpsellTreatment(
          e,
        ) === c
      );
    }
    function p() {
      return o("AdsCreativeGenAIEligibilityUtils").isGrabAndGoTreatment(
        o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(),
      );
    }
    function _() {
      return o("AdsCreativeGenAIEligibilityUtils").isUnifiedL1Targeted() || p();
    }
    function f() {
      return r("gkx")("19144") && !_();
    }
    function g(t) {
      return (
        t === void 0 && (t = !0),
        o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment(t) === e
      );
    }
    function h(e) {
      return (
        o("AdsCreativeGenAIEligibilityUtils").isUnifiedL1Targeted() ||
        (e != null
          ? e
          : o("AdsCreativeGenAIEligibilityUtils").getGrabAndGoTreatment()) === s
      );
    }
    ((l.IMAGE_ADOPTERS_UPSELL_SLOT_TREATMENT = u),
      (l.IMAGE_ADOPTERS_UPSELL_ROW_TREATMENT = c),
      (l.isImageAdoptersUpsellSlotArm = d),
      (l.isImageAdoptersUpsellRowArm = m),
      (l.isInGrabAndGo = p),
      (l.isAdoptablePreviewEnabled = _),
      (l.isEligibleForGrabAndGoShadowTraffic = f),
      (l.isGrabAndGoOldUXEnabled = g),
      (l.isGrabAndGoUnificationEnabled = h));
  },
  98,
);
