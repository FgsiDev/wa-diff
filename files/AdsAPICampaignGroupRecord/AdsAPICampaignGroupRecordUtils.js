__d(
  "AdsAPICampaignGroupRecordUtils",
  [
    "AdsAPICampaignGroupRecord",
    "AdsAPIObjectives",
    "AdsAudienceDirectConfig",
    "AdsBuyingTypes",
    "AdsCFConstants",
    "AdsLWIProductUtils",
    "AdsLWIRestrictActionsInAdsManager.experimental",
    "AdsLoadState_LEGACY",
    "AdsPECrepePackages",
    "AdsSmartPromotion",
    "QE2Logger",
    "adsCampaignGroupGetBudgetType",
    "isEmpty",
    "isFalsey",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("AdsAPICampaignGroupRecord"))({
        buying_type: r("AdsAudienceDirectConfig").isDirectDealsUser
          ? r("AdsBuyingTypes").FIXED_PRICE
          : r("AdsBuyingTypes").AUCTION,
        campaign_group_status: "ACTIVE",
        id: o("AdsCFConstants").NEW_CAMPAIGN_GROUP_ID,
        isNew: !0,
        is_draft_only: !1,
        loadState: r("AdsLoadState_LEGACY").LOADED,
        name: null,
        objective: r("AdsAPIObjectives").LINK_CLICKS,
        updated_time: null,
        spend_cap: null,
        adlabels: null,
      });
    function u(e) {
      return (
        e.smart_promotion_type === r("AdsSmartPromotion").SMART_APP_PROMOTION
      );
    }
    function c(e) {
      return (
        e.smart_promotion_type === r("AdsSmartPromotion").AUTOMATED_SHOPPING_ADS
      );
    }
    function d(e, t) {
      var n, o;
      return (
        e.smart_promotion_type ===
          r("AdsSmartPromotion").AUTOMATED_SHOPPING_ADS &&
        ((n = e.collaborative_ads_partner_info) == null
          ? void 0
          : n.get("merchant_partner_business_id")) != null &&
        ((o = t.promoted_object) == null ? void 0 : o.product_set_id) != null
      );
    }
    function m(e) {
      return ee(e) === o("AdsPECrepePackages").ASA_PGD_PACKAGE_CONFIG_ID;
    }
    function p(e) {
      return c(e) && !m(e) && e.ad_creation_package_config != null;
    }
    function _(e) {
      return e.id;
    }
    function f(e) {
      return e.buying_type;
    }
    function g() {
      return s;
    }
    function h(e) {
      return e.objective;
    }
    function y(e) {
      return e.is_odax_campaign_group;
    }
    function C(e) {
      return e.is_full_funnel;
    }
    function b(e) {
      return e.is_reels_trending_ads_enabled;
    }
    function v(e) {
      return e.rf_campaign_type;
    }
    function S(e) {
      return e.is_meta_moment_maker_enabled;
    }
    function R(e) {
      return e.frequency_control_specs;
    }
    function L(e) {
      var t = e.spend_cap;
      return t != null ? +t : null;
    }
    function E(e) {
      return L(e) != null;
    }
    function k(e) {
      return e.name;
    }
    function I(e) {
      return T(e);
    }
    function T(e) {
      return r("adsCampaignGroupGetBudgetType")(
        e == null ? void 0 : e.daily_budget,
        e == null ? void 0 : e.lifetime_budget,
      );
    }
    function D(e) {
      var t = T(e);
      switch (t) {
        case "daily":
          return e.daily_budget;
        case "lifetime":
          return e.lifetime_budget;
        default:
          return 0;
      }
    }
    function x(e) {
      return r("nullthrows")(I(e));
    }
    function $(e) {
      return T(e) != null;
    }
    function P(e) {
      return T(e) != null;
    }
    function N(e) {
      return P(e) || e.budget_strategy === "CAMPAIGN_FLEX_BUDGET";
    }
    function M(e) {
      return (
        r("adsCampaignGroupGetBudgetType")(
          e.daily_budget,
          e.lifetime_budget,
        ) === "lifetime"
      );
    }
    function w(e) {
      return (
        r("adsCampaignGroupGetBudgetType")(
          e.daily_budget,
          e.lifetime_budget,
        ) === "daily"
      );
    }
    function A(t) {
      var n = t.pacing_type;
      if (n) {
        var o;
        n = (o = n.toJS == null ? void 0 : n.toJS()) != null ? o : n;
      }
      return $(t) && !(e || (e = r("isEmpty")))(n);
    }
    function F(e) {
      return e.buying_type === r("AdsBuyingTypes").RESERVED;
    }
    function O(e) {
      var t = e.id;
      return B(t);
    }
    function B(e) {
      return (
        r("isFalsey")(e) || e === o("AdsCFConstants").NEW_CAMPAIGN_GROUP_ID
      );
    }
    function W(e) {
      var t = e.pacing_type;
      return t != null && t.includes("no_pacing");
    }
    function q(e) {
      var t = e.pacing_type;
      return (
        t != null && (t.includes("day_parting") || t.includes("DAY_PARTING"))
      );
    }
    function U(e) {
      var t;
      return (t = e.promoted_object) == null ? void 0 : t.product_catalog_id;
    }
    function V(e) {
      var t;
      return (t = e.promoted_object) == null ? void 0 : t.page_id;
    }
    function H(e) {
      var t;
      return (
        ((t = e.promoted_object) == null ? void 0 : t.application_id) != null
      );
    }
    function G(e) {
      return e.boosted_component_product === "boosted_automated_ads";
    }
    function z(e) {
      return (
        o("QE2Logger").logExposureForUser(
          "ads_lwi_restrict_actions_in_am_for_lwi_frontend_universe",
        ),
        r("AdsLWIRestrictActionsInAdsManager.experimental")
          .adsLWIRestrictActionInAdsManagerEnabled
          ? e != null && o("AdsLWIProductUtils").isAdsLWIProduct(e)
          : !1
      );
    }
    function j(e) {
      var t;
      return (t = e.special_ad_categories) != null ? t : [];
    }
    function K(e) {
      var t;
      return (t = e.special_ad_category_country) != null ? t : [];
    }
    function Q(e) {
      return (
        e.smart_promotion_type === r("AdsSmartPromotion").SMART_APP_PROMOTION
      );
    }
    function X(e) {
      if (!Q(e)) return !1;
      var t = ee(e);
      return (
        t !==
        o("AdsPECrepePackages")
          .ADVANTAGE_PLUS_APP_CAMPAIGN_PGD_PACKAGE_CONFIG_ID
      );
    }
    function Y(e) {
      return (
        e.smart_promotion_type !== r("AdsSmartPromotion").SMART_APP_PROMOTION
      );
    }
    function J(e) {
      return e.is_skadnetwork_attribution === !0;
    }
    function Z(e) {
      switch (e.objective) {
        case r("AdsAPIObjectives").REACH:
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").VIDEO_VIEWS:
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
          return !0;
        default:
          return !1;
      }
    }
    function ee(e) {
      var t;
      return (t = e.ad_creation_package_config) == null ? void 0 : t.id;
    }
    function te(e) {
      var t;
      return (
        (e == null || (t = e.time_suggestion) == null
          ? void 0
          : t.is_enabled) === !0
      );
    }
    function ne(e) {
      var t, n;
      return (t =
        e == null ||
        (n = e.time_suggestion) == null ||
        (n = n.high_demand_periods) == null
          ? void 0
          : n.some(function (e) {
              return e != null && (e == null ? void 0 : e.study_id) != null;
            })) != null
        ? t
        : !1;
    }
    function re(e) {
      switch (e.objective) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
        case r("AdsAPIObjectives").APP_INSTALLS:
          return !0;
        default:
          return !1;
      }
    }
    function oe(e) {
      switch (e.objective) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
        case r("AdsAPIObjectives").WEBSITE_CONVERSIONS:
        case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
          return !0;
        default:
          return !1;
      }
    }
    function ae(e) {
      switch (e.objective) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
        case r("AdsAPIObjectives").WEBSITE_CONVERSIONS:
        case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
          return !0;
        default:
          return !1;
      }
    }
    function ie(e) {
      return ae(e) && !c(e) && !Q(e);
    }
    function le(e) {
      return (
        e.mc_experience_config != null &&
        e.mc_experience_config.merchant_type != null
      );
    }
    ((l.isAdvantageAppCampaign = u),
      (l.isAutomatedShoppingAds = c),
      (l.isCollabAdsASC = d),
      (l.isUnifiedAutomatedShoppingAds = m),
      (l.isPreUnifiedAutomatedShoppingAds = p),
      (l.getID = _),
      (l.getBuyingType = f),
      (l.getNewCampaignGroup = g),
      (l.getObjective = h),
      (l.getIsODAXCampaignGroup = y),
      (l.getIsFullFunnel = C),
      (l.getIsReelsTrendingAdsEnabled = b),
      (l.getRfCampaignType = v),
      (l.getIsMetaMomentMakerEnabled = S),
      (l.getFrequencyControlSpecs = R),
      (l.getSpendCap = L),
      (l.hasSpendCap = E),
      (l.getName = k),
      (l.getBudgetType_LEGACY = I),
      (l.getBudgetType = T),
      (l.getBudgetValue = D),
      (l.getBudgetTypeEnforcing = x),
      (l.hasBudget_LEGACY = $),
      (l.hasBudget = P),
      (l.isBidStrategyOwnedByCampaignGroup = N),
      (l.hasLifetimeBudget = M),
      (l.hasDailyBudget = w),
      (l.hasBudgetBeta = A),
      (l.isReachFrequency = F),
      (l.isNewCampaignGroup = O),
      (l.isNewCampaignGroupID = B),
      (l.getUseAcceleratedDelivery = W),
      (l.getUseDayParting = q),
      (l.getPromotedObjectProductCatalogID = U),
      (l.getPromotedObjectPageID = V),
      (l.hasPromotedObjectApplicationID = H),
      (l.isAutomatedAd = G),
      (l.isLWIProduct = z),
      (l.getRegulatedCategories = j),
      (l.getRegulatedCategoryCountries = K),
      (l.isSmartAppPromotion = Q),
      (l.isPreUnificationSmartAppPromotion = X),
      (l.isNotSmartAppPromotion = Y),
      (l.isSKAdNetworkAttribution = J),
      (l.isCBOExcludedObjective = Z),
      (l.getPackageConfigID = ee),
      (l.hasTimeSuggestionEnabled = te),
      (l.hasHighDemandPeriodsWithStudyEnabled = ne),
      (l.isAppOrSalesObjective = re),
      (l.isSalesObjective = oe),
      (l.isAppOrSalesODAXOrPreODAXObjective = ae),
      (l.isManualSalesOrApp = ie),
      (l.isMetaCheckoutAds = le));
  },
  98,
);
