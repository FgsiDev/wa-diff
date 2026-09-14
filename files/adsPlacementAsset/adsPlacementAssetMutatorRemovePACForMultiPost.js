__d(
  "adsPlacementAssetMutatorRemovePACForMultiPost",
  [
    "AdsAssetFeedUtils",
    "adsPlacementCustomizationConvertToDOFMessagingDestinationAdWithExistingPost",
    "adsPlacementCustomizationConvertToStaticAdWithExistingPost",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
        ? o("AdsAssetFeedUtils").isClickToMultiDestAds(e)
          ? r(
              "adsPlacementCustomizationConvertToDOFMessagingDestinationAdWithExistingPost",
            )(e)
          : r("adsPlacementCustomizationConvertToStaticAdWithExistingPost")(e)
        : e;
    }
    l.default = e;
  },
  98,
);
