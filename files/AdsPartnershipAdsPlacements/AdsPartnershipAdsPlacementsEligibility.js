__d(
  "AdsPartnershipAdsPlacementsEligibility",
  [
    "AdsPlacementsNSClosedBetaGatingUtils",
    "AdsUEditorAdgroupPartnershipAdExistingPostUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e == null) return !1;
      var n = e.branded_content_boosting_type != null;
      return (
        n &&
        o(
          "AdsUEditorAdgroupPartnershipAdExistingPostUtils",
        ).isExistingPostSelected({ creative: e }) &&
        o(
          "AdsPlacementsNSClosedBetaGatingUtils",
        ).isAdAccountEligibleForNSPartnershipAdsOrganic(t)
      );
    }
    l.isEligibleForPartnershipAdsOrganicPlacements = e;
  },
  98,
);
