__d(
  "AdsAdvancedPreviewV2VariationLoggingPlugins",
  [
    "AdsAdvancedPreviewV2CreativeAssetGroupVariationLoggingPlugin",
    "AdsAdvancedPreviewV2DACollectionLeadCardToStaticMediaVariationLoggingPlugin",
    "AdsAdvancedPreviewV2DCOMediaVariationLoggingPlugin",
    "AdsAdvancedPreviewV2DegreesOfFreedomVariationLoggingPlugin",
    "AdsAdvancedPreviewV2SingleOptimizationVariationLoggingPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsAdvancedPreviewV2CreativeAssetGroupVariationLoggingPlugin"),
        n(
          "AdsAdvancedPreviewV2DACollectionLeadCardToStaticMediaVariationLoggingPlugin",
        ),
        n("AdsAdvancedPreviewV2DCOMediaVariationLoggingPlugin"),
        n("AdsAdvancedPreviewV2DegreesOfFreedomVariationLoggingPlugin"),
        n("AdsAdvancedPreviewV2SingleOptimizationVariationLoggingPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
