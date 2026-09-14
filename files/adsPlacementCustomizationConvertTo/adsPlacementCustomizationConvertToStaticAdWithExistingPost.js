__d(
  "adsPlacementCustomizationConvertToStaticAdWithExistingPost",
  ["AdsAPIAdgroupRecordUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.creative;
      return t == null || !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
        ? e
        : e.set("creative", t.delete("asset_feed_spec"));
    }
    l.default = e;
  },
  98,
);
