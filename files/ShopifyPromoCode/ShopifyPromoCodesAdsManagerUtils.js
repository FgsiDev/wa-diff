__d(
  "ShopifyPromoCodesAdsManagerUtils",
  [
    "$InternalEnum",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsInterfacesLogger",
    "AdsPromotedObjectTypes",
    "AdsUEditorUtils",
    "IncentivesAdsManagerUtils",
    "ShopsAdsOffsiteCheckoutAdsUtils",
    "ShouldShowShopifyPromoCodeAdFieldStatus",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum")({
        SHOPIFY_AD_CONTENT_PROMO_CODES_CLICK:
          "shopify_ad_content_promo_codes_click",
        SHOPIFY_MERCHANT_WEBSITE_PROMO_CODES_CLICK:
          "shopify_merchant_website_promo_codes_click",
        SHOPIFY_MERCHANT_WEBSITE_PROMO_CODES_SUGGESTION:
          "shopify_merchant_website_promo_codes_suggestion",
        SHOPIFY_MERCHANT_WEBSITE_URL_PROMO_CODES_CLICK:
          "shopify_merchant_website_url_promo_codes_click",
        SHOPIFY_MERCHANT_WEBSITE_URL_PROMO_CODES_SUGGESTION:
          "shopify_merchant_website_url_promo_codes_suggestion",
        SHOPIFY_MANUAL_COUPON_CODE_ADDED: "shopify_manual_coupon_code_added",
        SHOPIFY_MANUAL_COUPON_CODE_REMOVED:
          "shopify_manual_coupon_code_removed",
        SHOPS_ADS_SHOPIFY_PROMOTIONS_MODULE_VIEWED:
          "shops_ads_shopify_promotions_module_viewed",
      }),
      u = n("$InternalEnum")({ OPT_IN: "opt_in", OPT_OUT: "opt_out" }),
      c = [
        (e = o("AdsAPIObjectives")).OUTCOME_SALES,
        e.PRODUCT_CATALOG_SALES,
        e.WEBSITE_CONVERSIONS,
        e.CONVERSIONS,
      ],
      d = [
        r("AdsPromotedObjectTypes").WEB_AND_SHOP,
        r("AdsPromotedObjectTypes").PRODUCT_SET,
      ],
      m = [
        r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS,
        r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND,
        r("AdsAPIOptimizationGoals").ONSITE_CONVERSIONS,
      ];
    function p(e, t, n, o, a) {
      var i;
      r("AdsInterfacesLogger").log({
        eventName: e,
        data:
          ((i = {}),
          (i.ad_account_id = t),
          (i.adgroup_id = n),
          (i.status = o),
          (i.message = a),
          i),
      });
    }
    function _(e) {
      var t = e.account,
        n = e.adObjects,
        a = n.adgroup,
        i = n.campaign,
        l = n.campaignGroup,
        s = function (n, r) {
          return p(
            "should_show_shopify_promo_code_field",
            t.account_id,
            a.id,
            n,
            r,
          );
        },
        u = o(
          "IncentivesAdsManagerUtils",
        ).isCreativeEndStateEligibleByExperiment(i, a, l),
        _ =
          u &&
          o(
            "IncentivesAdsManagerUtils",
          ).isMovingAMStaticAdsPromoModuleEnabled(),
        f = u && !_,
        g = !f && (_ || y("silent"));
      if (f || g)
        return (
          s(
            r("ShouldShowShopifyPromoCodeAdFieldStatus")
              .AD_ACCOUNT_NOT_ELIGIBLE,
            "Promo code module is enabled in " + (f ? "CES" : "L1") + " module",
          ),
          !1
        );
      var h = o(
          "IncentivesAdsManagerUtils",
        ).getAdOptimizationGoalsObjectivePromotedObjectType(n, t),
        C = h[0],
        b = h[1],
        v = h[2];
      if (!c.includes(C))
        return (
          s(
            r("ShouldShowShopifyPromoCodeAdFieldStatus").OBJECTIVE_NOT_ELIGIBLE,
            C,
          ),
          !1
        );
      if (!d.includes(b))
        return (
          s(
            r("ShouldShowShopifyPromoCodeAdFieldStatus")
              .PROMOTED_OBJECT_NOT_ELIGIBLE,
            b,
          ),
          !1
        );
      if (!m.includes(v))
        return (
          s(
            r("ShouldShowShopifyPromoCodeAdFieldStatus")
              .OPTIMIZATION_GOAL_NOT_ELIGIBLE,
            v,
          ),
          !1
        );
      if (
        !o(
          "ShopsAdsOffsiteCheckoutAdsUtils",
        ).adgroupHasWebsiteAndShopDestinationSpec(a)
      ) {
        var S;
        return (
          s(
            r("ShouldShowShopifyPromoCodeAdFieldStatus")
              .DESTINATION_TYPE_NOT_ELIGIBLE,
            (S = i.destination_type) != null ? S : "",
          ),
          !1
        );
      }
      return (s(r("ShouldShowShopifyPromoCodeAdFieldStatus").ELIGIBLE), !0);
    }
    function f(e) {
      return _(e)
        ? o("AdsUEditorUtils").boolMapToSet(
            r("immutable").Map({ shopifyPromoCodeAdField: !0 }),
          )
        : r("immutable").Set();
    }
    function g(e) {
      var t = e.match(/discount\/([^&?]*)/);
      return t != null
        ? t[1]
        : ((t = e.match(/code=([^&]*)/)), t == null ? "" : t[1]);
    }
    function h(e) {
      var t,
        n = e.adObjects,
        r = n.adgroup;
      return (
        ((t = r.creative) == null || (t = t.destination_spec) == null
          ? void 0
          : t.destination_type) === "WEBSITE_AND_SHOP"
      );
    }
    function y(e) {
      return e ? r("gkx")("10777") : r("gkx")("478");
    }
    ((l.ShopsAdsShopifyAdsManagerEvent = s),
      (l.ShopsAdsShopifyAdsManagerCodeEligibilityStatus = u),
      (l.shouldShowShopifyPromoCodeField = _),
      (l.getShopifyPromoCodeAdField = f),
      (l.extractedCouponCodeFromWebsiteURL = g),
      (l.isShopAds = h),
      (l.shouldShowShopifyShopAdsPromotionsModuleInL1 = y));
  },
  98,
);
