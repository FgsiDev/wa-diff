__d(
  "ShopsAdsAdapterCampaignRulePluginResolver",
  [
    "ShopsAdsAdapterCampaignRulePluginType",
    "ShopsAdsAdapterCampaignRulePlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("ShopsAdsAdapterCampaignRulePlugins").getArray();
      }, o("ShopsAdsAdapterCampaignRulePluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
