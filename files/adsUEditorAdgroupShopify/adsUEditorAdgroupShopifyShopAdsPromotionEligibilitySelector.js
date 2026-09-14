__d(
  "adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
  [
    "IncentivesAdsManagerUtils",
    "ShopifyPromoCodesAdsManagerUtils",
    "adsCreateSelector",
    "adsUEditorAdPlainObjectsForSelectedAdgroupsSelector",
    "adsUEditorAdgroupShopifyPromoCodeShopsAdSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdPlainObjectsForSelectedAdgroupsSelector")],
        function (t) {
          return t.some(function (e) {
            var t = e.adgroup,
              n = e.campaign,
              r = e.campaignGroup;
            return o(
              "IncentivesAdsManagerUtils",
            ).isCreativeEndStateEligibleByExperiment(n, t, r);
          });
        },
        { name: i.id + ".isPreCESSetupSelector" },
      ),
      s = r("adsCreateSelector")(
        [e, r("adsUEditorAdgroupShopifyPromoCodeShopsAdSelector")],
        function (t, n) {
          var e = n.getValue(),
            r = (e == null ? void 0 : e.is_shopify_seller_shops_ad) === !0,
            a = o(
              "ShopifyPromoCodesAdsManagerUtils",
            ).shouldShowShopifyShopAdsPromotionsModuleInL1("silent"),
            i =
              r &&
              t &&
              o(
                "IncentivesAdsManagerUtils",
              ).isMovingAMStaticAdsPromoModuleEnabled(),
            l = r && t && !i,
            s = r && !l && (i || a),
            u = l || s,
            c = r && !u;
          return {
            isCESModuleEnabled: l,
            isL1ModuleEnabled: s,
            isShopifyShopAds: r,
            shouldUpdatePromotionalMetadataCouponCodes: u,
            shouldUpdatePromotionalMetadataManualCouponCodes: c,
          };
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector",
        },
      );
    ((l.isPreCESSetupSelector = e),
      (l.adsUEditorAdgroupShopifyShopAdsPromotionEligibilitySelector = s));
  },
  98,
);
