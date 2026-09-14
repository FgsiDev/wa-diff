__d(
  "AdsAPlusCStandardEnhancementsGranularControlUtils",
  [
    "AdsAutomaticFlowUtils",
    "AdsUEditorAdgroupMusicExistingPostUtils",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "imageTemplate",
      "imageTouchup",
      "textOptimization",
      "videoAutoCrop",
      "inlineComment",
    ];
    function s(e, t) {
      return e == null ? !1 : t ? r("gkx")("1178") : r("gkx")("1179");
    }
    function u() {
      return r("justknobx")._("17");
    }
    function c() {
      return r("gkx")("12565");
    }
    function d(e, t) {
      switch (e) {
        case "textOptimization":
          return t.filter(function (e) {
            return e.adCreativeOptimizationCategory === "text_combinations";
          });
        default:
          return t;
      }
    }
    function m(e, t, n) {
      return n == null || n.length < 1
        ? !1
        : n.every(function (n) {
            var a = o(
                "AdsAutomaticFlowUtils",
              ).isEligibleForAPlusCUseExistingPost(e, t, n),
              i = y(n),
              l =
                n != null && o("AdsAutomaticFlowUtils").isFBPostPhotoAlbumAd(n);
            return a && i && (!l || r("gkx")("12517"));
          });
    }
    function p(e, t, n) {
      if (n == null || n.length !== 1) return !1;
      var r = n[0],
        a = o("AdsAutomaticFlowUtils").isEligibleForAPlusCUseExistingPost(
          e,
          t,
          r,
        ),
        i = y(r);
      return a && i;
    }
    function _(e, t, n) {
      return n == null || n.length < 1
        ? !1
        : n.every(function (n) {
            var r = o(
                "AdsAutomaticFlowUtils",
              ).isEligibleForAPlusCUseExistingPost(e, t, n),
              a = C(n);
            return r && a;
          });
    }
    function f(e, t, n) {
      return n == null || n.length < 1
        ? !1
        : n.every(function (n) {
            var a = o(
                "AdsAutomaticFlowUtils",
              ).isEligibleForAPlusCUseExistingPost(e, t, n),
              i =
                n != null && o("AdsAutomaticFlowUtils").isFBPostPhotoAlbumAd(n);
            return a && (!i || r("gkx")("12518"));
          });
    }
    function g(e, t, n) {
      return n == null || n.length < 1
        ? !1
        : n.every(function (n) {
            var a = C(n),
              i = o("AdsAutomaticFlowUtils").isEligibleForAPlusCUseExistingPost(
                e,
                t,
                n,
              );
            return a && i && r("justknobx")._("4291");
          });
    }
    function h(e, t, n) {
      return n == null || n.length < 1
        ? !1
        : n.every(function (n) {
            var a = C(n),
              i = o("AdsAutomaticFlowUtils").isEligibleForAPlusCUseExistingPost(
                e,
                t,
                n,
              );
            return a && i && r("justknobx")._("4097");
          });
    }
    function y(e) {
      var t = b(e);
      return t === "photo";
    }
    function C(e) {
      var t = b(e);
      return t.startsWith("video");
    }
    function b(e) {
      var t,
        n = (t = e.is_instagram_post) != null ? t : !1;
      return o("AdsUEditorAdgroupMusicExistingPostUtils").getByPathForFBIGPost(
        e,
        n,
      );
    }
    function v() {
      return r("gkx")("17857");
    }
    ((l.STANDARD_ENHANCEMENTS_SUB_FEATURES = e),
      (l.passImageEnhancementGlobalishBackendGK = s),
      (l.shouldShowLaunchedNotificationImprovements = u),
      (l.passMultiSceneAnimationClipVideoPlayerGK = c),
      (l.getSubFeaturePreviewSpecs = d),
      (l.isEligibleForImageTouchupsUseExistingPost = m),
      (l.isEligibleForImageAnimationUseExistingPost = p),
      (l.isEligibleForVideoAutoCropUseExistingPost = _),
      (l.isEligibleForTextOptimizationsUseExistingPost = f),
      (l.isEligibleForVideoUncropUseExistingPost = g),
      (l.isEligibleForVideoFilteringUseExistingPost = h),
      (l.isAPlusCGenAIFeatureSensitiveVertical = v));
  },
  98,
);
