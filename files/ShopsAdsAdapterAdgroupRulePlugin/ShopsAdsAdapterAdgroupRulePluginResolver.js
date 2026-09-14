__d(
  "ShopsAdsAdapterAdgroupRulePluginResolver",
  [
    "ShopsAdsAdapterAdgroupRulePluginType",
    "ShopsAdsAdapterAdgroupRulePlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("ShopsAdsAdapterAdgroupRulePlugins").getArray();
      }, o("ShopsAdsAdapterAdgroupRulePluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
