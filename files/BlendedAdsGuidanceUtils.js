__d(
  "BlendedAdsGuidanceUtils",
  ["AdDraftFragmentSource", "AdsBlendedAdsConstant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return [
        r("AdDraftFragmentSource").BLENDED_ADS_VIA_CREATION,
        r("AdDraftFragmentSource").BLENDED_ADS_VIA_L3_DUPLICATION,
        r("AdDraftFragmentSource")
          .BLENDED_ADS_VIA_L3_DUPLICATION_FOR_DA_ADVERTISERS_FLOW,
      ].includes(e);
    }
    function s(e) {
      return [
        r("AdDraftFragmentSource").BLENDED_ADS_VIA_L3_DUPLICATION,
        r("AdDraftFragmentSource")
          .BLENDED_ADS_VIA_L3_DUPLICATION_FOR_DA_ADVERTISERS_FLOW,
      ].includes(e);
    }
    function u(e) {
      return (
        e ===
        o("AdsBlendedAdsConstant").AdsBlendedAdsStatus.DRAFT_CREATING_SUCCESS
      );
    }
    ((l.shouldShowGuidanceForSource = e),
      (l.isDuplicationUpgradeSource = s),
      (l.isStatusEligibleForNUXGuidance = u));
  },
  98,
);
