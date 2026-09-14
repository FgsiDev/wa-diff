__d(
  "AdsConvergenceCampaignPluginResolver",
  [
    "AdsConvergenceCampaignPluginType",
    "AdsConvergenceCampaignPlugins",
    "adsPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsPluginResolverFactory")(function () {
        return n("AdsConvergenceCampaignPlugins").getArray();
      }, o("AdsConvergenceCampaignPluginType").order),
      s = e;
    l.default = s;
  },
  98,
);
