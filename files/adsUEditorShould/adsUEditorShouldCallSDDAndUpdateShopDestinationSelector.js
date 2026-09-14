__d(
  "adsUEditorShouldCallSDDAndUpdateShopDestinationSelector",
  [
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "adsCreateSelector",
    "adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors",
    "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("adsUEditorCampaignIsShopsAdsIncentiveProgramSelectors")
            .adsUEditorCampaignIsAllShopsAdsIncentiveProgramSelector,
          r("adsUEditorSelectedAdgroupPlainObjectsSelector"),
        ],
        function (t, n) {
          var e = n.every(function (e) {
            return !(
              t &&
              !o("AdsDynamicAdsUtils").isDynamicAd(e) &&
              (o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
                o("AdsAssetFeedUtils").hasPACCarouselFormat(e))
            );
          });
          if (!e) return !1;
          var r = n.every(function (e) {
            var t;
            return (
              ((t = e.creative) == null || (t = t.destination_spec) == null
                ? void 0
                : t.destination_type) === "WEBSITE_AND_SHOP"
            );
          });
          return t || r;
        },
        {
          name:
            i.id + ".adsUEditorShouldCallSDDAndUpdateShopDestinationSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
