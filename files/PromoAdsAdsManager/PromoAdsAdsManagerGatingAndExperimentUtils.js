__d(
  "PromoAdsAdsManagerGatingAndExperimentUtils",
  ["IGAdsSensitiveVerticalsUtils", "gkx", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("1824");
    }
    function s(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("16608") : r("gkx")("16609")
      );
    }
    function u(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("17688") : r("gkx")("17689")
      );
    }
    function c(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("3443")) != null ? n : !1;
      }
      return (t = r("qex")._("3454")) != null ? t : !1;
    }
    function d() {
      return r("gkx")("8480");
    }
    function m() {
      return D() ? !1 : r("gkx")("20734");
    }
    function p(e) {
      return _(e) || f(e);
    }
    function _(e) {
      var t, n;
      return e
        ? (t = r("qex")._("4877")) != null
          ? t
          : !1
        : (n = r("qex")._("4878")) != null
          ? n
          : !1;
    }
    function f(e) {
      var t, n;
      return e
        ? (t = r("qex")._("4879")) != null
          ? t
          : !1
        : (n = r("qex")._("4880")) != null
          ? n
          : !1;
    }
    function g(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("4072")) != null ? n : !1;
      }
      return (t = r("qex")._("4073")) != null ? t : !1;
    }
    function h() {
      var e;
      return (e = r("qex")._("3773")) != null ? e : !1;
    }
    function y() {
      return r("gkx")("17087");
    }
    function C() {
      return r("gkx")("24614");
    }
    function b() {
      return r("gkx")("5532");
    }
    function v(e) {
      var t;
      if ((e === void 0 && (e = !0), e)) {
        var n;
        return (n = r("qex")._("5675")) != null ? n : !1;
      }
      return (t = r("qex")._("1896")) != null ? t : !1;
    }
    function S(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("2181")) != null ? n : !1;
      }
      return (t = r("qex")._("2184")) != null ? t : !1;
    }
    function R() {
      return r("gkx")("23714");
    }
    function L() {
      return r("gkx")("26650");
    }
    function E(e) {
      var t;
      if ((e === void 0 && (e = !1), e)) {
        var n;
        return (n = r("qex")._("2181")) != null ? n : !1;
      }
      return (t = r("qex")._("2184")) != null ? t : !1;
    }
    function k() {
      return r("justknobx")._("2657");
    }
    function I() {
      return r("justknobx")._("1456");
    }
    function T() {
      return r("gkx")("5075");
    }
    function D() {
      return (
        r("IGAdsSensitiveVerticalsUtils").is_pharma_or_sensitive_vertical ||
        r("IGAdsSensitiveVerticalsUtils").is_luxury_vertical
      );
    }
    ((l.isPharmaHoldout = e),
      (l.isPromoAdsUpsellGuidanceGKEnabled = s),
      (l.isEmailCaptureUpsellGuidanceGKEnabled = u),
      (l.isEmailCaptureUpsellGuidanceQEEnabled = c),
      (l.isAdsManagerPreviewEnabledForReelsTextOverlayPromo = d),
      (l.isPromoAdsIgStoriesCTAPreClickExperienceEnabled = m),
      (l.isWACaptureEnabledForAdAccount = p),
      (l.isWACaptureEnabledForAdAccountWithGuidance = f),
      (l.isShopifySyncEnabled = g),
      (l.isPromoAdsAutoSourcedOfferTransparencyEnabled = h),
      (l.isShopifySyncedOfferBAUExpansionAdExEnabled = y),
      (l.isReconBAUExpansionAdExEnabled = C),
      (l.isInPromoCodesOfferUnificationTargetingGK = b),
      (l.isInPromoCodesOfferUnificationExperimentTestGroup = v),
      (l.isPromoAdsAlwaysOnEnabled = S),
      (l.isVanillaPromoAlwaysOnNoOffersNewUIEnabled = R),
      (l.isVanillaPromoAlwaysOnNewAutoModeContentEnabled = L),
      (l.isEmailCaptureAlwaysOnEnabled = E),
      (l.shouldShowPromoAdsAlwaysOnNoticeInDuplicationDialog = k),
      (l.shouldHideHelpArticleLinksForV3 = I),
      (l.isPromoAdsSuppressDOIOnEditEnabled = T),
      (l.isSensitiveTierAdvertiser = D));
  },
  98,
);
