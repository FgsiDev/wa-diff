__d(
  "AdsCreativeFlexGKCheckUtils",
  ["AdsChildAttachmentsUtils", "AdsDynamicAdsUtils", "gkx", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return !r("gkx")("17706");
    }
    function s(t) {
      return r("gkx")("15988") || !e()
        ? !1
        : c("silent")
          ? !0
          : t
            ? r("gkx")("2885")
            : r("gkx")("4955");
    }
    function u(t) {
      if (!e()) return !1;
      if (t) {
        var n = r("gkx")("19418"),
          o = r("gkx")("16966");
        return n || o;
      }
      var a = r("gkx")("19419"),
        i = r("gkx")("18234");
      return a || i;
    }
    function c(e) {
      return e ? r("gkx")("16043") : r("gkx")("19633");
    }
    function d() {
      return r("gkx")("15988") || !e() ? !1 : r("gkx")("9516");
    }
    function m() {
      return r("gkx")("12405");
    }
    function p(t) {
      return r("gkx")("15988") || !e()
        ? !1
        : t
          ? r("gkx")("15472")
          : r("gkx")("19200");
    }
    function _(t) {
      return e() && (t === "silent" ? r("gkx")("7489") : r("gkx")("8099"));
    }
    function f() {
      return e();
    }
    function g(t) {
      return e() && (t === "silent" ? r("gkx")("14599") : r("gkx")("22365"));
    }
    function h(t) {
      return e() && (t === "silent" ? r("gkx")("7923") : r("gkx")("8322"));
    }
    function y(e) {
      return e === "silent" ? r("gkx")("26107") : r("gkx")("22935");
    }
    function C(t) {
      return e() && (t === "silent" ? r("gkx")("6711") : r("gkx")("6961"));
    }
    function b(e) {
      var t;
      return !(
        e == null ||
        o("AdsDynamicAdsUtils").isDynamicAd(e) ||
        o("AdsChildAttachmentsUtils").isStaticCarouselAd(e) ||
        (e == null || (t = e.metadata) == null
          ? void 0
          : t.is_pca_unified_format_ad) === !0
      );
    }
    function v(e) {
      return r("gkx")("17296") ? b(e) : !1;
    }
    function S(e) {
      return e
        ? r("qex")._("5128") === !0 ||
            r("gkx")("19452") === !0 ||
            r("gkx")("19454") === !0 ||
            r("gkx")("20703") === !0
        : r("qex")._("4862") === !0 ||
            r("gkx")("19491") === !0 ||
            r("gkx")("19510") === !0 ||
            r("gkx")("20755") === !0;
    }
    function R() {
      return d() || p("silent") || u("silent");
    }
    function L() {
      return r("gkx")("18706") && (d() || p("silent"));
    }
    function E(e) {
      return L() && e === !0;
    }
    function k(e) {
      return e ? r("gkx")("19774") : r("gkx")("19777");
    }
    function I() {
      return e() && r("gkx")("23297");
    }
    function T(e) {
      return e === "silent" ? r("gkx")("19805") : r("gkx")("19816");
    }
    function D() {
      return e() && r("gkx")("9251");
    }
    function x() {
      return r("gkx")("14125");
    }
    function $(t) {
      return (
        t === void 0 && (t = !0),
        e()
          ? t
            ? r("gkx")("7278") || r("gkx")("23682")
            : r("gkx")("7356") || r("gkx")("23692")
          : !1
      );
    }
    function P(e, t) {
      return (
        t === void 0 && (t = !0),
        !r("justknobx")._("3107") || !N(t) ? !1 : e !== "OPTED_OUT"
      );
    }
    function N(e) {
      return e ? r("gkx")("23843") : r("gkx")("23854");
    }
    function M(e) {
      return e === "OPTED_OUT";
    }
    function w() {
      return r("gkx")("25891");
    }
    function A() {
      return r("gkx")("16087");
    }
    function F() {
      return r("justknobx")._("1241");
    }
    function O() {
      return r("justknobx")._("5767");
    }
    function B() {
      var e;
      return r("justknobx")._("3320") && (e = r("justknobx")._("3329")) != null
        ? e
        : 0;
    }
    function W() {
      return r("qex")._("400") === !0;
    }
    function q() {
      return r("qex")._("901") === !0;
    }
    function U() {
      return r("qex")._("1384") === !0;
    }
    function V() {
      return q() || U();
    }
    function H() {
      return r("justknobx")._("5770") ? !1 : r("gkx")("16767");
    }
    ((l.isAccountEligibleForCreativeFlexRollout = e),
      (l.isAccountEligibleForStickyDefaultOn = s),
      (l.isAccountEligibleForGlobalish = u),
      (l.isEligibleForSBGStickyDefaultOn = c),
      (l.isEligibleForSBGDefaultOn = d),
      (l.isEligibleForCreativeFlexDefaultOnFix = m),
      (l.isEligibleForNewSBGDefaultOn = p),
      (l.isAccountEligibleForCreativeFlexBulkyEdit = _),
      (l.isEligibleForCreativeFlexLifetimeBudgetFix = f),
      (l.isAccountEligibleForMidflightDefaultOn = g),
      (l.isAccountEligibleForDAFeatureAwarePreflight = h),
      (l.isEligibleForCreativeFlexNoCandidateFix = y),
      (l.isAccountEligibleForCreativeFlexDuplicationUpgrade = C),
      (l.isAdGroupEligibleForEagerPathWH = b),
      (l.isEagerPathWHDynamicCapLimitEnabled = v),
      (l.isWHReadPathEnabled = S),
      (l.isRMDefaultOn = R),
      (l.isEligibleForSBGAdgroupStickyOptOut = L),
      (l.isStickyRelatedMediaOptOut = E),
      (l.isEligibleForCreativeFlexRemoveBudgetCheck = k),
      (l.isEligibleForCreativeFlexUnknownBucketFix = I),
      (l.isAwarenessObjectiveEnabledForCreativeFlex = T),
      (l.isEligibleForCreativeFlexUnknownBucketFixEnhanced = D),
      (l.isEligibleForSADefaultOnRescue = x),
      (l.isAccountEligibleForPushModel = $),
      (l.isPushModelDefaultOn = P),
      (l.isPushModelStickyOptOut = M),
      (l.shouldSkipCreativeFlexSettingWriteOnDefaultOn = w),
      (l.shouldSkipCreativeFlexCagOriginWrite = A),
      (l.isExistingPostAdFlowEnabled = F),
      (l.isExistingPostAdDefaultOnEnabled = O),
      (l.getCreativeFlexOptOutStickyThreshold = B),
      (l.isRelatedMediaEnabledForExistingPostNoExposure = W),
      (l.isSuggestedPostHiddenAfterSelect = q),
      (l.isSuggestedPostRemovedAfterSelect = U),
      (l.isMultiPostRelatedMediaCoexistenceEnabled = V),
      (l.isEligibleForMultiMediaAltText = H));
  },
  98,
);
