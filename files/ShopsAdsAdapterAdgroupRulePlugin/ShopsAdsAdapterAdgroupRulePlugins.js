__d(
  "ShopsAdsAdapterAdgroupRulePlugins",
  [
    "ShopsAdsAdapterAdgroupAutoflowRulePlugin",
    "ShopsAdsAdapterAdgroupCTARulePlugin",
    "ShopsAdsAdapterAdgroupDestinationRulePlugin",
    "ShopsAdsAdapterAdgroupOptOutCallExtensionRulePlugin",
    "ShopsAdsAdapterAdgroupRemoveAudioRulePlugin",
    "ShopsAdsAdapterAdgroupRemoveBadgeSetRulePlugin",
    "ShopsAdsAdapterAdgroupRemoveOptimizationTypeRulePlugin",
    "ShopsAdsAdapterAdgroupRemoveProductCategoriesRulePlugin",
    "ShopsAdsAdapterAdgroupRemoveProductTagRulePlugin",
    "ShopsAdsAdapterAdgroupSetCMSConnectedIdentitiesRulePlugin",
    "ShopsAdsAdapterAdgroupShopsBundleRulePlugin",
    "ShopsAdsAdapterCreativeFormatRulePlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("ShopsAdsAdapterAdgroupAutoflowRulePlugin"),
        n("ShopsAdsAdapterAdgroupDestinationRulePlugin"),
        n("ShopsAdsAdapterAdgroupSetCMSConnectedIdentitiesRulePlugin"),
        n("ShopsAdsAdapterCreativeFormatRulePlugin"),
        n("ShopsAdsAdapterAdgroupShopsBundleRulePlugin"),
        n("ShopsAdsAdapterAdgroupOptOutCallExtensionRulePlugin"),
        n("ShopsAdsAdapterAdgroupRemoveProductCategoriesRulePlugin"),
        n("ShopsAdsAdapterAdgroupRemoveOptimizationTypeRulePlugin"),
        n("ShopsAdsAdapterAdgroupRemoveAudioRulePlugin"),
        n("ShopsAdsAdapterAdgroupRemoveBadgeSetRulePlugin"),
        n("ShopsAdsAdapterAdgroupRemoveProductTagRulePlugin"),
        n("ShopsAdsAdapterAdgroupCTARulePlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
