__d(
  "AdsMetadataSourceShopifyShopAdsPromotionPlugin",
  [
    "fbt",
    "JSResource",
    "ShopifyPromoCodeEnums",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsUEditorAdgroupShopifyPromoCodeCreativeFieldContainerV2.react",
        ).__setRef("AdsMetadataSourceShopifyShopAdsPromotionPlugin"),
      ),
      d = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSourceShopifyShopAdsPromotionHeaderContainer.react",
        ).__setRef("AdsMetadataSourceShopifyShopAdsPromotionPlugin"),
      ),
      m = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSourceShopifyShopAdsSelectedItemsContainer.react",
        ).__setRef("AdsMetadataSourceShopifyShopAdsPromotionPlugin"),
      ),
      p = r("lazyLoadComponent")(
        r("JSResource")(
          "AdsMetadataSourceShopifyShopAdsOptInBadge.react",
        ).__setRef("AdsMetadataSourceShopifyShopAdsPromotionPlugin"),
      ),
      _ = function () {
        return s._(/*BTDS*/ "Promotions");
      },
      f = r("adsCreateSelector")(
        [
          o("adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector")
            .adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector,
        ],
        function (t) {
          return t.isCESModuleEnabled;
        },
        { name: i.id + ".eligibilityAndGKSelector" },
      ),
      g = {
        key: "shopify_shop_ads_promotion",
        type: "metadata/source_extension",
        preloadableJSResources: [
          r("JSResource")(
            "AdsUEditorAdgroupShopifyPromoCodeCreativeFieldContainerV2.react",
          ).__setRef("AdsMetadataSourceShopifyShopAdsPromotionPlugin"),
          r("JSResource")(
            "AdsMetadataSourceShopifyShopAdsPromotionHeaderContainer.react",
          ).__setRef("AdsMetadataSourceShopifyShopAdsPromotionPlugin"),
          r("JSResource")(
            "AdsMetadataSourceShopifyShopAdsSelectedItemsContainer.react",
          ).__setRef("AdsMetadataSourceShopifyShopAdsPromotionPlugin"),
          r("JSResource")(
            "AdsMetadataSourceShopifyShopAdsOptInBadge.react",
          ).__setRef("AdsMetadataSourceShopifyShopAdsPromotionPlugin"),
        ],
        getHeading: _,
        getSubheading: function () {
          return "";
        },
        getSortOrder: function () {
          return 2;
        },
        visibilityDataSelector: r("adsCreateStructuredSelector")(
          { isEligible: f },
          i.id + ".visibilityDataSelector",
        ),
        iconURI:
          "/images/ads/ads_manager/metadata/Promo-Ads-Module-Thumbnail.svg",
        isVisible: function (t) {
          var e = t.isEligible;
          return e;
        },
        HeaderComponent: function () {
          return u.jsx(d, {});
        },
        MainComponent: function () {
          return u.jsx(c, {
            caller: o("ShopifyPromoCodeEnums")
              .ShopAdsShopifyPromotionsModuleCaller.CES_METADATA,
          });
        },
        SelectedItemsComponent: function () {
          return u.jsx(m, {});
        },
        OptInComponent: function () {
          return u.jsx(p, {});
        },
      },
      h = g;
    l.default = h;
  },
  226,
);
