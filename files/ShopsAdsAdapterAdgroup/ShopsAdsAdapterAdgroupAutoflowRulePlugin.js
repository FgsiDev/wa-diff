__d(
  "ShopsAdsAdapterAdgroupAutoflowRulePlugin",
  ["adsAutomaticFlowMutationSetDoFSpec"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_adgroup_rule",
        key: "shops_ads_adgroup_autoflow_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_adgroup_autoflow_rule" },
        transform: function (t, n) {
          var e = n.account,
            r = n.campaign,
            a = n.campaignGroup,
            i = n.getShouldEnableAutomaticFlowByDefault,
            l = o(
              "adsAutomaticFlowMutationSetDoFSpec",
            ).adsAutomaticFlowLiteSpecMutator(
              e,
              { campaign: r, campaignGroup: a, adgroup: t },
              i,
            );
          return l;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
