__d(
  "AdsGenAIMVPFeatureFlags",
  [
    "AdsGenAIMVPUnifiedGenConfig",
    "ExecutionEnvironment",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? new URLSearchParams(window.location.search).has(
            "qe[mvp_unified_generation_qe_universe]",
          )
        : !1;
    }
    var u = s();
    function c() {
      return r("gkx")("12699");
    }
    function d() {
      return r("gkx")("25629");
    }
    function m() {
      return r("gkx")("4215");
    }
    function p() {
      var e;
      return !m() && ((e = r("qex")._("3771")) != null ? e : !1);
    }
    function _() {
      return r("gkx")("8847");
    }
    function f() {
      return r("gkx")("694");
    }
    function g() {
      var e;
      return r("gkx")("13992") ? 1 : (e = r("qex")._("2356")) != null ? e : 0;
    }
    function h() {
      return r("qex")._("4305") === !0;
    }
    function y(e, t) {
      if (
        (t === void 0 && (t = r("AdsGenAIMVPUnifiedGenConfig").v2i_v2),
        e === "VIDEO" && t)
      )
        return 12;
      var n = r("qex")._("3394");
      return n === "fork_composite_qe_arm4_0811" ||
        n === "fork_v2i_qe_arm3_0812" ||
        n === "qe/fork_composite_qe_arm3_0820"
        ? 12
        : 18;
    }
    function C() {
      return r("AdsGenAIMVPUnifiedGenConfig")
        .should_hide_overlay_in_unified_text;
    }
    function b() {
      return r("qex")._("1505") === !0;
    }
    function v() {
      var e;
      return u && (e = r("qex")._("3394")) != null ? e : null;
    }
    function S() {
      var e;
      return (e = r("qex")._("573")) != null ? e : null;
    }
    function R() {
      return "social_proof";
    }
    function L() {
      return r("qex")._("5681") === !0;
    }
    function E() {
      return r("gkx")("26274");
    }
    function k() {
      return r("gkx")("26407");
    }
    function I() {
      return r("justknobx")._("5224");
    }
    function T() {
      return r("qex")._("1703") === !0;
    }
    function D() {
      return r("AdsGenAIMVPUnifiedGenConfig").v2i_v2;
    }
    function x() {
      return r("qex")._("2007") === !0;
    }
    function $() {
      return r("justknobx")._("5314");
    }
    function P() {
      return r("qex")._("5826") === !0;
    }
    function N() {
      return (
        r("AdsGenAIMVPUnifiedGenConfig").send_l1_text_from_client ||
        r("qex")._("945") === !0
      );
    }
    function M() {
      return r("qex")._("281") === !0;
    }
    function w() {
      return r("gkx")("10331");
    }
    function A() {
      return r("gkx")("1463");
    }
    function F() {
      return r("gkx")("1463");
    }
    function O() {
      return r("justknobx")._("4868");
    }
    function B() {
      return r("gkx")("6388");
    }
    ((l.isDebugOverlayEnabled = c),
      (l.isGuidedEditFlowEnabled = d),
      (l.isCollectionsViewEnabled = p),
      (l.isProgCollectionSelectAllEnabled = _),
      (l.isCollectionsHideSummaryEnabled = f),
      (l.getRowsOverColsArmNumber = g),
      (l.isProgLoadingCollectionEnabled = h),
      (l.getLoadingGlimmerCount = y),
      (l.shouldHideOverlayInUnifiedText = C),
      (l.isCollectionInsightsEnabled = b),
      (l.getAppVersionOverride = v),
      (l.getV2ISplashPageVersionName = S),
      (l.getSplashHeadlineVariant = R),
      (l.isDynamicSplashTextEnabled = L),
      (l.isOneClickGenerationEnabled = E),
      (l.isV2IProgLoadMultiUploadEnabled = k),
      (l.isV2IPrefetchOnUploadKilled = I),
      (l.isV2IPrefetchOnVideoEncodeEnabled = T),
      (l.isV2Iv2Enabled = D),
      (l.isV2IPrefetchOnVideoPreEncodeTriggerEnabled = x),
      (l.isScrollDepthLoggingEnabled = $),
      (l.isPrefetchOnSeedSelectEnabled = P),
      (l.isSendTextFromClientEnabled = N),
      (l.isV2ICollectionsEnabled = M),
      (l.showThumbnailPills = w),
      (l.shouldFixL1CardForV2I = A),
      (l.shouldApplyV2IFunnelFixes = F),
      (l.shouldRunSpecConsistencyReducerJK = O),
      (l.shouldSkipRegenConfirmIfNoAssetsSelected = B));
  },
  98,
);
