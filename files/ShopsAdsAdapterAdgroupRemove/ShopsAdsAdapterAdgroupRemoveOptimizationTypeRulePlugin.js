__d(
  "ShopsAdsAdapterAdgroupRemoveOptimizationTypeRulePlugin",
  ["AdsUEditorAdgroupShopsAdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_remove_adgroup_optimization_type_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_remove_adgroup_optimization_type_rule" },
        transform: function (t, n) {
          return o(
            "AdsUEditorAdgroupShopsAdsMutators",
          ).maybeRemoveOptimizationType(t);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
