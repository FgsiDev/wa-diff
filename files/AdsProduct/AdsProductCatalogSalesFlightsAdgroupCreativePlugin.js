__d(
  "AdsProductCatalogSalesFlightsAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsDynamicAdgroupCreativePluginCommon",
    "AdsDynamicTargetingCategories",
    "AdsPromotedObjectTypes",
    "CatalogVertical",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsDynamicAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "product-catalog-sales-flights",
          pivots: {
            objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
            promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
            catalogVertical: r("CatalogVertical").FLIGHTS,
          },
          getSupportedMediaFormats: function (t) {
            return t.targetingCategory ===
              r("AdsDynamicTargetingCategories").PROSPECTING
              ? new Set(["CAROUSEL", "IMAGE"])
              : new Set(["IMAGE"]);
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
