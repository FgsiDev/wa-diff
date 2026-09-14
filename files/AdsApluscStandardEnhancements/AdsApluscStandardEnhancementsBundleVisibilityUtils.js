__d(
  "AdsApluscStandardEnhancementsBundleVisibilityUtils",
  ["AdsApluscStandardEnhancementsConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "image_touchups":
        case "video_auto_crop":
        case "video_uncrop":
          return "aplusc_visual_touchups";
        case "image_templates":
          return "aplusc_add_overlays";
        case "text_optimizations":
          return "aplusc_text_improvements";
        case "pac_relaxation":
          return "aplusc_flexible_media";
        default:
          return null;
      }
    }
    function s(t) {
      var n = t.cfpToolStates,
        r = t.enrolledCreativeFeatures,
        a = t.isApluscFMTest,
        i = t.isApluscSEBundleTest,
        l = t.serverChildRecTypes,
        s = t.serverEligibleCreativeFeatures;
      if (s == null) return { features: new Map(), recTypes: [] };
      var u = new Set(r),
        c = l == null ? null : new Set(l),
        d = new Map(),
        m = new Set();
      return (
        s.forEach(function (t, r) {
          var l = e(r);
          if (l != null && !(c != null && !c.has(l))) {
            if (n != null) {
              var s = o(
                "AdsApluscStandardEnhancementsConstants",
              ).CREATIVE_FEATURE_NAME_TO_CREATIVE_OPTIMIZATION_TOOL_PLUGIN_KEYS.get(
                r,
              );
              if (s == null || !n.has(s)) return;
            }
            if (!u.has(r)) {
              var p = l === "aplusc_flexible_media";
              (p ? !a : !i) || (d.set(r, Array.from(t)), m.add(l));
            }
          }
        }),
        { features: d, recTypes: Array.from(m) }
      );
    }
    ((l.getRecTypeForCreativeFeature = e), (l.getDisplayableChildren = s));
  },
  98,
);
