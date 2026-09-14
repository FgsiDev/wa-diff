__d(
  "URIInitDataUtil",
  [
    "AdsAPIObjectives",
    "AdsCanvasConstants",
    "FBLogger",
    "getQueryParamFromURI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("getQueryParamFromURI")("fbid");
    }
    function s() {
      return r("getQueryParamFromURI")("campaign");
    }
    function u() {
      return r("getQueryParamFromURI")("desturl");
    }
    function c() {
      return r("getQueryParamFromURI")("associated_fbid");
    }
    function d() {
      return r("getQueryParamFromURI")("destination");
    }
    function m() {
      var e = r("getQueryParamFromURI")("objective");
      return !e && r("getQueryParamFromURI")("storyid")
        ? r("AdsAPIObjectives").POST_ENGAGEMENT
        : e === "WEBSITE_CLICKS"
          ? r("AdsAPIObjectives").LINK_CLICKS
          : (e &&
              !r("AdsAPIObjectives")[e] &&
              r("FBLogger")("ads").warn(
                "Objective in URL is not a valid objective: %s",
                e,
              ),
            e);
    }
    function p() {
      return r("getQueryParamFromURI")("optimization_goal");
    }
    function _() {
      return r("getQueryParamFromURI")("buying_type");
    }
    function f() {
      return r("getQueryParamFromURI")("rf_prediction_id");
    }
    function g() {
      return r("getQueryParamFromURI")("showlog");
    }
    function h() {
      return r("getQueryParamFromURI")("showlogcategory");
    }
    function y() {
      return r("getQueryParamFromURI")("app_id");
    }
    function C() {
      return r("getQueryParamFromURI")("object_store_url");
    }
    function b() {
      return r("getQueryParamFromURI")("smart_promotion_type");
    }
    function v() {
      return r("getQueryParamFromURI")("environment");
    }
    function S() {
      return r("getQueryParamFromURI")("daily_budget");
    }
    function R() {
      return r("getQueryParamFromURI")("saved_audience");
    }
    function L() {
      var e = r("getQueryParamFromURI")("regulated_categories");
      if (e != null) return JSON.parse(e);
    }
    function E() {
      var e = r("getQueryParamFromURI")("targeting_spec");
      if (e != null) return JSON.parse(e);
    }
    function k() {
      var e = r("getQueryParamFromURI")("targeting_spec");
      if (e != null) {
        var t = JSON.parse(e);
        return t.custom_audiences;
      }
    }
    function I() {
      return r("getQueryParamFromURI")("catalog_id");
    }
    function T() {
      return r("getQueryParamFromURI")("product_set_id");
    }
    function D() {
      return r("getQueryParamFromURI")("redirect_context");
    }
    function x() {
      return r("getQueryParamFromURI")("act");
    }
    function $() {
      return r("getQueryParamFromURI")("business_id");
    }
    function P() {
      return r("getQueryParamFromURI")("inject_tip");
    }
    function N() {
      return r("getQueryParamFromURI")("catalog_id");
    }
    function M() {
      return r("getQueryParamFromURI")("app_referrer");
    }
    function w() {
      return r("getQueryParamFromURI")("show_tip_id");
    }
    function A() {
      var e = r("getQueryParamFromURI")("enable_stages");
      return e && e.split(",");
    }
    function F() {
      var e,
        t = r("getQueryParamFromURI")("selected_adset_ids");
      return (e = t && t.split(",")) != null ? e : [];
    }
    function O() {
      return r("getQueryParamFromURI")("entry_point");
    }
    function B() {
      return r("getQueryParamFromURI")("nav_source");
    }
    function W() {
      return r("getQueryParamFromURI")("objective");
    }
    function q() {
      return r("getQueryParamFromURI")("object_story_id");
    }
    function U() {
      var e = M(),
        t = N(),
        n = m();
      return (
        e === o("AdsCanvasConstants").APP_REFERRER.CATALOG_MANAGER &&
        t != null &&
        n === r("AdsAPIObjectives").LINK_CLICKS
      );
    }
    function V() {
      return r("getQueryParamFromURI")("use_insights") === "true";
    }
    function H() {
      return r("getQueryParamFromURI")("redirected_from_xfac") === "true";
    }
    function G() {
      return r("getQueryParamFromURI")("custom_event_type");
    }
    function z() {
      return r("getQueryParamFromURI")("recommendation_type");
    }
    function j() {
      return (
        r("getQueryParamFromURI")("is_incremental_attribution_enabled") ===
        "true"
      );
    }
    function K() {
      return r("getQueryParamFromURI")("cpas_merchant_business_id");
    }
    ((l.getDefaultDestinationID = e),
      (l.getDefaultCampaignGroupID = s),
      (l.getDefaultDestinationURL = u),
      (l.getDefaultAssociatedID = c),
      (l.getDefaultDestination = d),
      (l.getDefaultObjective = m),
      (l.getDefaultPrefillOptimizationGoal = p),
      (l.getDefaultBuyingType = _),
      (l.getPredictionID = f),
      (l.getShowLog = g),
      (l.getShowLogCategory = h),
      (l.getApplicationID = y),
      (l.getObjectStoreURL = C),
      (l.getSmartPromotionType = b),
      (l.getEnvironment = v),
      (l.getDailyBudget = S),
      (l.getDefaultSavedAudience = R),
      (l.getDefaultRegulatedCategories = L),
      (l.getDefaultTargeting = E),
      (l.getDefaultCustomAudiences = k),
      (l.getDefaultCatalogID = I),
      (l.getDefaultProductSetID = T),
      (l.getDefaultReDirectContext = D),
      (l.getAccountID = x),
      (l.getBusinessID = $),
      (l.getDefaultInjectTip = P),
      (l.getCatalogID = N),
      (l.getAppReferrer = M),
      (l.getShowTipID = w),
      (l.getDefaultEnableStages = A),
      (l.getSelectedCampaignIDs = F),
      (l.getEntryPoint = O),
      (l.getNavSource = B),
      (l.getObjective = W),
      (l.getObjectStoryId = q),
      (l.isFromCatalogCollectionFlow = U),
      (l.shouldUseInsightsFromURI = V),
      (l.isRedirectedFromXFAC = H),
      (l.getCustomEventType = G),
      (l.getRecommendationType = z),
      (l.getIsIncrementalAttributionEnabled = j),
      (l.getCPASMerchantBusinessID = K));
  },
  98,
);
