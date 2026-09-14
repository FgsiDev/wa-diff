__d(
  "AdsAdvancedPreviewLoggingUtils",
  [
    "AdsAdvancedPreviewV2VariationLoggingPlugins",
    "AdsAdvancedPreviewVariationSourceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, a;
      if (e == null) return {};
      var i = e.config,
        l = e.pluginKey,
        s = r("AdsAdvancedPreviewV2VariationLoggingPlugins")
          .withShape({ forVariationPlugin: l })
          .getArray(),
        u = s[0],
        c = o(
          "AdsAdvancedPreviewVariationSourceUtils",
        ).getVariationCreativeOptimizationKey(e);
      return babelHelpers.extends(
        {},
        (t =
          u == null || u.getLoggingData == null
            ? void 0
            : u.getLoggingData(i)) != null
          ? t
          : {},
        ((n = {}), (n.subsequent_data = l), n),
        c != null ? ((a = {}), (a.creative_editor_type = c), a) : {},
      );
    }
    function s(e) {
      if (e.type !== "combined-variation") return null;
      var t = e.variations,
        n = t.map(function (e) {
          return o(
            "AdsAdvancedPreviewVariationSourceUtils",
          ).getVariationCreativeOptimizationKey(e);
        });
      return n
        .filter(function (e) {
          return e != null && e.length > 0;
        })
        .join("___");
    }
    ((l.getVariationLoggingData = e),
      (l.getOptimizationPluginKeysForCombinedVariationConfig = s));
  },
  98,
);
