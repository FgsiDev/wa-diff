__d(
  "ShopsAdsAdapterAdgroupShopsBundleRulePlugin",
  ["AdsUEditorAdgroupShopsAdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_opt_in_bundle_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_opt_in_bundle_rule" },
        transform: function (t, n) {
          var e,
            r,
            a = n.isShopsAdsIncentiveProgram,
            i = n.linkPostFormat;
          if (!a) return t;
          var l = (e = t.creative) == null ? void 0 : e.product_set_id,
            s =
              (r = t.creative) == null || (r = r.asset_feed_spec) == null
                ? void 0
                : r.optimization_type;
          return o("AdsUEditorAdgroupShopsAdsMutators").optIntoShopsBundle(
            t,
            i,
            l,
            s,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
