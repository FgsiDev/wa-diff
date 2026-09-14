__d(
  "AdsSAIPAllowAllSpecUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupUtils",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsDeliveryOmnichannelUtils",
    "AdsDynamicAdsUtils",
    "AdsLinkPostFormat",
    "AdsLinkTypeUtils",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignSAIPLocationUtils",
    "AdsUEditorCampaignShopAdsUtils",
    "adsConvertAdObjectRecordToPlainJS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t !== r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS) return !1;
      switch (e) {
        case "ADD_TO_CART":
        case "CONTENT_VIEW":
        case "INITIATED_CHECKOUT":
          return !0;
        default:
          return !1;
      }
    }
    function s(t) {
      var n,
        r,
        a =
          (n = o("AdsDeliveryOmnichannelUtils").getEventType(t)) != null
            ? n
            : (r = t.promoted_object) == null
              ? void 0
              : r.custom_event_type;
      return (a == null || !e(a, t.optimization_goal)) && a !== "PURCHASE";
    }
    function u(e) {
      return o("AdsUEditorCampaignShopAdsUtils").isShopsAdsIncentiveProgram(
        r("adsConvertAdObjectRecordToPlainJS")(e),
      );
    }
    function c(e) {
      return e;
    }
    function d(e) {
      var t,
        n = (t = e.targeting.geo_locations) == null ? void 0 : t.toJS();
      return !o("AdsUEditorCampaignSAIPLocationUtils").isLocationSAIPSupported(
        n,
      );
    }
    function m(e) {
      var t,
        n = (t = e.targeting.geo_locations) == null ? void 0 : t.toJS();
      return !o(
        "AdsUEditorCampaignSAIPLocationUtils",
      ).isLocationShopsAdsValueOptimizationSupported(n);
    }
    function p(e) {
      return s(e) || d(e);
    }
    function _(e, t) {
      var n = o("AdsAPIAdgroupRecordUtils").getLinkPostFormat(e, t),
        a = o("AdsDynamicAdsUtils").isDynamicAd(e);
      return (
        n === r("AdsLinkPostFormat").COLLECTIONS ||
        (n === r("AdsLinkPostFormat").SINGLE && a)
      );
    }
    function f(e, t) {
      var n = o("AdsLinkTypeUtils").isEventLinkTypeSelected(e, t),
        r = o("AdsCanvasAdUtils").isCanvasDestinationEnabled(e),
        a =
          o("AdsAdgroupUtils").hasAppLink(e) ||
          o("AdsAdgroupUtils").hasAppID(e) ||
          o("AdsAdgroupUtils").hasAppProductPageID(e);
      return n || r || a;
    }
    function g(e, t, n) {
      if (e == null || t == null || n == null) return !1;
      var r = o(
        "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
      ).getAdgroupSpecPathPlugin({ campaign: t, campaignGroup: n });
      return _(e, r) || f(e, r);
    }
    function h(e, t) {
      return o("AdsDynamicAdsUtils").isDynamicAd(e) || !t
        ? !1
        : o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
            o("AdsAssetFeedUtils").hasPACCarouselFormat(e);
    }
    ((l.getNonOCRLaunchEligibility = e),
      (l.isConversionEventSAIPIncompatible = s),
      (l.isSAIPAllowAllOptionsEligibleWithAdObject = u),
      (l.isSAIPAllowAllOptionsEligible = c),
      (l.isAudienceSAIPIncompatible = d),
      (l.isAudienceShopsAdsValueOptimizationIncompatible = m),
      (l.isCampaignSAIPIncompatible = p),
      (l.isAdgroupSAIPCompatible = g),
      (l.isStaticCarouselMdsaAdgroup = h));
  },
  98,
);
