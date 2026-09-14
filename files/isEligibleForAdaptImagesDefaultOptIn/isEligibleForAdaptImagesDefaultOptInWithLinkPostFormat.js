__d(
  "isEligibleForAdaptImagesDefaultOptInWithLinkPostFormat",
  [
    "AdsDynamicAdsUtils",
    "AdsLinkPostFormat",
    "isAdaptImagesDefaultOptInBlocked",
    "isEligibleForAPlusCAdaptImages",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return !o("AdsDynamicAdsUtils").isDynamicAd(e) ||
        (t !== r("AdsLinkPostFormat").MULTIPLE &&
          t !== r("AdsLinkPostFormat").SINGLE) ||
        r("isAdaptImagesDefaultOptInBlocked")(n)
        ? !1
        : r("isEligibleForAPlusCAdaptImages")();
    }
    l.default = e;
  },
  98,
);
