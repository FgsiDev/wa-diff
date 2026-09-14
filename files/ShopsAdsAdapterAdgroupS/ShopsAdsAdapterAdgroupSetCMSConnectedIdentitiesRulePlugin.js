__d(
  "ShopsAdsAdapterAdgroupSetCMSConnectedIdentitiesRulePlugin",
  ["AdsUEditorAdgroupShopsAdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_cms_connected_identity_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_cms_connected_identity_rule" },
        transform: function (t, n) {
          var e = n.campaignGroup,
            r = n.getProductCatalog,
            a = n.hostID,
            i = n.isMFRV2Applied,
            l = n.isShopsAdsIncentiveProgram,
            s = n.recommendedIdentitiesWithSAIPAdCredit,
            u = n.setPageReducerExtraData;
          return !l || i === !0
            ? t
            : o("AdsUEditorAdgroupShopsAdsMutators").setCMSConnectedIdentities(
                t,
                a,
                e,
                r,
                u,
                s,
              );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
