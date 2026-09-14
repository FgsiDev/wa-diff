__d(
  "ShopsAdsAdapterCampaignRulePlugins",
  [
    "ShopsAdsAdapterCampaignAudienceRulePlugin",
    "ShopsAdsAdapterCampaignConversionOptimizationRulePlugin",
    "ShopsAdsAdapterCampaignDestinationTypeRulePlugin",
    "ShopsAdsAdapterCampaignPlacementsRulePlugin",
    "ShopsAdsAdapterCampaignPromotedObjectRulePlugin",
    "ShopsAdsAdapterCampaignShopLevelActivationBudgetAndDurationRulePlugin",
    "ShopsAdsAdapterConversionCampaignPromotedObjectRulePlugin",
    "ShopsAdsAdapterPCSCampaignPromotedObjectRulePlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("ShopsAdsAdapterCampaignAudienceRulePlugin"),
        n(
          "ShopsAdsAdapterCampaignShopLevelActivationBudgetAndDurationRulePlugin",
        ),
        n("ShopsAdsAdapterConversionCampaignPromotedObjectRulePlugin"),
        n("ShopsAdsAdapterCampaignDestinationTypeRulePlugin"),
        n("ShopsAdsAdapterPCSCampaignPromotedObjectRulePlugin"),
        n("ShopsAdsAdapterCampaignPlacementsRulePlugin"),
        n("ShopsAdsAdapterCampaignPromotedObjectRulePlugin"),
        n("ShopsAdsAdapterCampaignConversionOptimizationRulePlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
