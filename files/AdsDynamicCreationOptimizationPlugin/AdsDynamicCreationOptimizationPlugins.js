__d(
  "AdsDynamicCreationOptimizationPlugins",
  [
    "AdsAuctionAppInstallsDynamicCreationOptimizationPlugin",
    "AdsAuctionBrandAwarenessDynamicCreationOptimizationPlugin",
    "AdsAuctionConversionsDynamicCreationOptimizationPlugin",
    "AdsAuctionLeadGenerationDynamicCreationOptimizationPlugin",
    "AdsAuctionLinkClicksDynamicCreationOptimizationPlugin",
    "AdsAuctionReachDynamicCreationOptimizationPlugin",
    "AdsAuctionVideoViewsDynamicCreationOptimizationPlugin",
    "AdsDefaultDynamicCreationOptimizationPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsAuctionBrandAwarenessDynamicCreationOptimizationPlugin"),
        n("AdsAuctionConversionsDynamicCreationOptimizationPlugin"),
        n("AdsAuctionLeadGenerationDynamicCreationOptimizationPlugin"),
        n("AdsAuctionLinkClicksDynamicCreationOptimizationPlugin"),
        n("AdsAuctionAppInstallsDynamicCreationOptimizationPlugin"),
        n("AdsAuctionReachDynamicCreationOptimizationPlugin"),
        n("AdsAuctionVideoViewsDynamicCreationOptimizationPlugin"),
        n("AdsDefaultDynamicCreationOptimizationPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
