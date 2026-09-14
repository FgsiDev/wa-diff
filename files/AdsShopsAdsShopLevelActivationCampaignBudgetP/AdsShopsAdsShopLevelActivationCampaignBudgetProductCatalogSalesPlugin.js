__d(
  "AdsShopsAdsShopLevelActivationCampaignBudgetProductCatalogSalesPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsProductCatalogSalesCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
    "AdsShopsAdsShopLevelActivationCampaignBudgetPluginCommon",
    "AdsUEditorShopAdsSpecLoggerUtils",
    "adsUEditorShopLevelActivationSelectors",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "shops-ads-product-catalog-sales",
        pivots: {
          objective: r("AdsAPIObjectives").OUTCOME_SALES,
          promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
        },
        getBaseDefaultDailyBudgetUSD: function (t) {
          if (
            o(
              "AdsShopsAdsShopLevelActivationCampaignBudgetPluginCommon",
            ).isEligibleSLAExperience(
              o(
                "adsUEditorShopLevelActivationSelectors",
              ).adsUEditorShopLevelActivationExperienceSelector(),
            )
          ) {
            var e = r("justknobx")._("1438");
            return (
              o("AdsUEditorShopAdsSpecLoggerUtils").logShopAdsDefaultSpec({
                defaultDailyBudget: e,
              }),
              e
            );
          }
          return r(
            "AdsProductCatalogSalesCampaignBudgetPlugin",
          ).getBaseDefaultDailyBudgetUSD(t);
        },
        getBaseDefaultLifetimeBudgetUSD: o(
          "AdsShopsAdsShopLevelActivationCampaignBudgetPluginCommon",
        ).getBaseDefaultLifetimeBudgetUSD,
        getDefaultEndDate: o(
          "AdsShopsAdsShopLevelActivationCampaignBudgetPluginCommon",
        ).getDefaultEndDate,
      }),
      s = e;
    l.default = s;
  },
  98,
);
