__d(
  "adsPlacementAssetMutationConvertToPACAutomatic",
  [
    "AdsAdgroupUtils",
    "AdsChildAttachmentsUtils",
    "FBLogger",
    "adsPlacementAssetMutationConvertToAssetFeedWithCampaignTargeting",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i) {
      var l,
        s = o("AdsChildAttachmentsUtils").isCarouselAd(e);
      if (s) l = "carousel";
      else {
        var u,
          c,
          d = o("AdsAdgroupUtils").getMediaFormat(e),
          m =
            ((u = e.creative) == null || (u = u.asset_feed_spec) == null
              ? void 0
              : u.videos) != null &&
            ((c = e.creative) == null || (c = c.asset_feed_spec) == null
              ? void 0
              : c.images) == null;
        switch (d) {
          case "IMAGE":
            l = "image";
            break;
          case "VIDEO":
            l = "video";
            break;
          case "AUTOMATIC":
            if (m) {
              l = "video";
              break;
            } else {
              l = "image";
              break;
            }
          default:
            (r("FBLogger")("ads_cx_pac_spec_conversion").warn(
              "[PAC] media format should be either IMAGE or VIDEO, but it is ",
              l,
            ),
              (l = "image"));
        }
      }
      return r(
        "adsPlacementAssetMutationConvertToAssetFeedWithCampaignTargeting",
      )(e, t, n, a, l, !0, i);
    }
    l.default = e;
  },
  98,
);
