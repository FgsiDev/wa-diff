__d(
  "AdsFormatPluginUtils",
  ["AdsBulkValueUtils", "AdsFormatPlugins"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["flexible", "single_media", "carousel", "collection"];
    function s(t, n) {
      return (
        n === void 0 && (n = e),
        o("AdsBulkValueUtils").getUniformValue(t.isReelsTrendingAdsEnabled) ===
        !0
          ? r("AdsFormatPlugins")
              .keys(n)
              .filter(function (e) {
                return e.isShown(t);
              })
              .getList()
          : r("AdsFormatPlugins")
              .keys(n)
              .filter(function (e) {
                return e.isShown(t) && e.getDisableReason(t) == null;
              })
              .getList()
      );
    }
    l.getOrderedAndEnabledFormatPlugins = s;
  },
  98,
);
