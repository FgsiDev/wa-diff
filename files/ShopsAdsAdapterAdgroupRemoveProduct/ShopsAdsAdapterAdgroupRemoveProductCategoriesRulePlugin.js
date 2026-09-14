__d(
  "ShopsAdsAdapterAdgroupRemoveProductCategoriesRulePlugin",
  ["AdsSAIPShouldTransformCatalogOptionsFromProductToMultipleProducts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_product_categories_rule",
        isCompatible: function (t) {
          return o(
            "AdsSAIPShouldTransformCatalogOptionsFromProductToMultipleProducts",
          ).shouldTransformCatalogOptionsFromProductToMultipleProducts(t)
            ? "catalog_option_product_categories_selected"
            : null;
        },
        pivots: { ruleType: "shops_ads_product_categories_rule" },
        transform: function (t) {
          return t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
