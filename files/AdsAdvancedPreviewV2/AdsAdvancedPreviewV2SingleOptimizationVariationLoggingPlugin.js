__d(
  "AdsAdvancedPreviewV2SingleOptimizationVariationLoggingPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        forVariationPlugin: "single-optimization",
        type: "advanced_preview/variation/logging",
        key: "single-optimization",
        getLoggingData: function (t) {
          var e;
          return t == null || t.type !== "single-optimization"
            ? {}
            : ((e = {}),
              (e.ad_creative_optimization_type = t.optimizationType),
              (e.view_type = t.optionValue),
              e);
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
