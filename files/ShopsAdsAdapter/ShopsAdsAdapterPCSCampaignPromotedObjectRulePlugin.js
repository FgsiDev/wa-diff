__d(
  "ShopsAdsAdapterPCSCampaignPromotedObjectRulePlugin",
  [
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "ShopsAdsAdapterCampaignPromotedObjectRulePlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("ShopsAdsAdapterCampaignPromotedObjectRulePlugin"),
        {
          type: "shops_ads_adapter_website_and_shop_opt_in_rule",
          key: "shops_ads_pcs_promoted_object_rule",
          pivots: {
            ruleType: "shops_ads_campaign_promoted_object_rule",
            objective: r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
          },
          transform: function (t, n) {
            var e = r(
              "ShopsAdsAdapterCampaignPromotedObjectRulePlugin",
            ).transform(t, n);
            return n.isShopsAdsIncentiveProgramEnabled
              ? r(
                  "AdsCampaignRecordAccessors",
                ).promoted_object.custom_event_type.set("PURCHASE", e)
              : e;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
