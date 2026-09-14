__d(
  "adsPlacementAssetMutationChangeFormatToAutomatic",
  ["AdsAdgroupRecordAccessors", "AdsAssetFeedUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.ad_formats.set(
            r("immutable").List.of("AUTOMATIC_FORMAT"),
            e,
          )
        : e;
    }
    l.default = e;
  },
  98,
);
