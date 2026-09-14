__d(
  "ShopsAdsAdapterAdgroupRemoveProductTagRulePlugin",
  [
    "AdsInteractiveComponentConstants",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_remove_interactive_components_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_remove_interactive_components_rule" },
        transform: function (t, n) {
          var e = n.isShopsAdsIncentiveProgram,
            r = n.specPlugin;
          return e
            ? o(
                "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
              ).removeInteractiveComponentsFromAdgroup(
                t,
                o("AdsInteractiveComponentConstants").SHOPPING_PRODUCT_TAG,
                r,
              )
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
