__d(
  "adsACOIsEligibleForACO",
  [
    "AdsAPICampaignRecordUtils",
    "AdsBwIUtils",
    "adsIsDAACOEligibleForAdObjects",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        n &&
        r("adsIsDAACOEligibleForAdObjects")(e, t) &&
        !o("AdsBwIUtils").isBwICampaignGroup(e) &&
        !o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(t)
      );
    }
    l.default = e;
  },
  98,
);
