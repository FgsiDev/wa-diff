__d(
  "adsDAShouldPrefillWebsiteURL",
  ["AdsCollectionsAdUtils", "AdsDynamicAdsUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !o("AdsDynamicAdsUtils").isDynamicAd(e) ||
        o("AdsCollectionsAdUtils").isCollectionsAd(e.creative)
        ? !1
        : r("gkx")("2985") || r("gkx")("19359");
    }
    l.default = e;
  },
  98,
);
