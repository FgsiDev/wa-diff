__d(
  "AdsAdvancedPreviewVariationSourceUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n;
      return (e == null || (n = e.generatedBy) == null ? void 0 : n.type) === t;
    }
    function l(e) {
      var t;
      return e == null
        ? null
        : ((t = e.generatedBy) == null ? void 0 : t.type) ===
            "creative-optimization"
          ? e.generatedBy.optimizationPluginKey
          : null;
    }
    function s(e) {
      var t;
      return e == null
        ? null
        : ((t = e.generatedBy) == null ? void 0 : t.type) ===
            "creative-optimization"
          ? e.generatedBy.optimizationPreviewPluginKey
          : null;
    }
    function u(e, t) {
      return l(e) === t;
    }
    ((i.isGeneratedBy = e),
      (i.getVariationCreativeOptimizationKey = l),
      (i.getVariationPreviewPluginKey = s),
      (i.isGeneratedByCreativeOptimization = u));
  },
  66,
);
