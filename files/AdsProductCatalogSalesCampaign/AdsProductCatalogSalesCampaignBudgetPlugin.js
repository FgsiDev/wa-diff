__d(
  "AdsProductCatalogSalesCampaignBudgetPlugin",
  ["AdsAPIObjectives", "AdsDefaultCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "product-catalog-sales",
        pivots: { objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES },
        getBaseDefaultDailyBudgetUSD: function (n) {
          return e;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
