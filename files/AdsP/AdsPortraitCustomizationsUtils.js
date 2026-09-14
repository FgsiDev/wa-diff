__d(
  "AdsPortraitCustomizationsUtils",
  [
    "AdsArLinkUtils",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsAssetFeedUtils",
    "AdsBuyingTypes",
    "AdsChildAttachmentsUtils",
    "AdsObjectTypeUtils",
    "AdsOfferState",
    "AdsPlacementAPISpecReaderUtils",
    "adsCampaignGetOfferStateType",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return !(
        !o("AdsChildAttachmentsUtils").isCarouselAd(t) ||
        o("AdsAssetFeedSimpleFieldCheckUtils").hasAssetCustomizationRules(t) ||
        o("AdsObjectTypeUtils").isDynamicProductAd(t) ||
        o("AdsAssetFeedUtils").isDynamicCreativeAdgroup(t) ||
        r("adsCampaignGetOfferStateType")(e) === r("AdsOfferState").HAS_OFFER ||
        o("AdsArLinkUtils").isArAdCreative(t)
      );
    }
    function s(e) {
      if (
        e &&
        e.buying_type === r("AdsBuyingTypes").RESERVED &&
        e.ad_formats instanceof Array
      ) {
        for (var t of e.ad_formats)
          if (t.type === "stories_carousel") return !0;
      }
      return !1;
    }
    function u(e) {
      var t;
      return !!(
        (t = e.creative) != null &&
        (t = t.portrait_customizations) != null &&
        t.specifications
      );
    }
    function c(t, n) {
      return !(
        !o(
          "AdsPlacementAPISpecReaderUtils",
        ).isOnlyActiveInstagramStoryPlacement(
          o(
            "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
          ).convertCampaignRecordToPlacementSpec(t),
        ) || !e(t, n)
      );
    }
    ((l.shouldMutateCarouselDeliveryMode = e),
      (l.isRFStoriesCarouselFormatSelected = s),
      (l.hasPortraitCustomizationsSpecifications = u),
      (l.shouldShowCarouselDeliveryModeCheckbox = c));
  },
  98,
);
