__d(
  "AdsConvergenceCampaignPlugins",
  [
    "AdsConvergenceDefaultCampaignPlugin",
    "AdsConvergenceLeadGenerationCampaignPlugin",
    "AdsConvergenceLinkClicksCampaignPlugin",
    "AdsConvergenceMessagesCampaignPlugin",
    "AdsConvergenceProductCatalogSalesCampaignPlugin",
    "AdsConvergenceReachCampaignPlugin",
    "AdsConvergenceStoreTrafficCampaignPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsConvergenceDefaultCampaignPlugin"),
        n("AdsConvergenceLeadGenerationCampaignPlugin"),
        n("AdsConvergenceLinkClicksCampaignPlugin"),
        n("AdsConvergenceMessagesCampaignPlugin"),
        n("AdsConvergenceProductCatalogSalesCampaignPlugin"),
        n("AdsConvergenceReachCampaignPlugin"),
        n("AdsConvergenceStoreTrafficCampaignPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
