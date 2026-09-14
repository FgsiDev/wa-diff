__d(
  "ShopsAdsAdapterAdgroupOptOutCallExtensionRulePlugin",
  ["AdsUEditorAdgroupShopsAdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_opt_out_call_extension_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_opt_out_call_extension_rule" },
        transform: function (t, n) {
          var e = n.isShopsAdsIncentiveProgram,
            r = n.specPlugin;
          return e
            ? o("AdsUEditorAdgroupShopsAdsMutators").optOutCallExtension(t, r)
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
