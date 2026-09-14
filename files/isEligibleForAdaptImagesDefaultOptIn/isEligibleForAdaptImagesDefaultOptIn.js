__d(
  "isEligibleForAdaptImagesDefaultOptIn",
  [
    "AdsCollectionsAdUtils",
    "AdsDynamicAdsUtils",
    "isAdaptImagesDefaultOptInBlocked",
    "isEligibleForAPlusCAdaptImages",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return !o("AdsDynamicAdsUtils").isDynamicAd(e) ||
        o("AdsCollectionsAdUtils").isCollectionAdgroup(e) ||
        r("isAdaptImagesDefaultOptInBlocked")(t)
        ? !1
        : r("isEligibleForAPlusCAdaptImages")();
    }
    l.default = e;
  },
  98,
);
