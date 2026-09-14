__d(
  "AdsExperiments2025H1GKUtils",
  ["AdsAccountUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !r("AdsAccountUtils").hasCapability(e, "BUSINESS_SEGMENT_IS_HEAD");
    }
    function s() {
      return r("gkx")("16173");
    }
    ((l.getDoesPassEntrypointForAdvantageAudienceFrictionModalGK = e),
      (l.getIsGKEligibleForLightweightTestPublishMigration = s));
  },
  98,
);
