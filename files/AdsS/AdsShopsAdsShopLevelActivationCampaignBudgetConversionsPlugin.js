__d(
  "AdsShopsAdsShopLevelActivationCampaignBudgetConversionsPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsShopsAdsShopLevelActivationCampaignBudgetPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "shops-ads-conversions",
        pivots: { objective: r("AdsAPIObjectives").CONVERSIONS },
        getBaseDefaultLifetimeBudgetUSD: o(
          "AdsShopsAdsShopLevelActivationCampaignBudgetPluginCommon",
        ).getBaseDefaultLifetimeBudgetUSD,
        getBaseDefaultDailyBudgetUSD: o(
          "AdsShopsAdsShopLevelActivationCampaignBudgetPluginCommon",
        ).getBaseDefaultDailyBudgetUSD,
        getDefaultEndDate: o(
          "AdsShopsAdsShopLevelActivationCampaignBudgetPluginCommon",
        ).getDefaultEndDate,
      }),
      s = e;
    l.default = s;
  },
  98,
);
