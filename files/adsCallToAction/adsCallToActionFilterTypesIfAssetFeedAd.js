__d(
  "adsCallToActionFilterTypesIfAssetFeedAd",
  [
    "AdsAssetFeedUtils",
    "AdsCallToActionTypes",
    "AdsDynamicAdsUtils",
    "AdsPACSupportedLinkCTAs",
    "NonURLLinkCTATypes",
    "enumObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (
        o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(e) &&
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(e)
      ) {
        var n = r("enumObjectKeys")(r("NonURLLinkCTATypes"));
        if (
          o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e) ||
          o("AdsDynamicAdsUtils").isDynamicAd(e)
        ) {
          var a = (
            o("AdsAssetFeedUtils").hasCarouselFormat(e)
              ? []
              : r("AdsPACSupportedLinkCTAs")
          ).concat(["GET_OFFER"]);
          n = n.filter(function (e) {
            return (
              e !== "MESSAGE_PAGE" && !a.includes(e) && e !== "WHATSAPP_MESSAGE"
            );
          });
        }
        t = t.filter(function (e) {
          return e && e.name && !n.includes(e.name);
        });
      }
      return (
        o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e) &&
          !t.includes(r("AdsCallToActionTypes").TYPES.GET_OFFER) &&
          t.push(r("AdsCallToActionTypes").TYPES.GET_OFFER),
        t
      );
    }
    l.default = e;
  },
  98,
);
