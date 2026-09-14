__d(
  "ShopsAdsAdapterCampaignShopLevelActivationBudgetAndDurationRulePlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignBudgetMutationUtils",
    "LoadObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_rule",
        key: "shops_ads_adapter_campaign_budget_and_duration_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: {
          ruleType:
            "shops_ads_shop_level_activation_campaign_budget_and_duration_rule",
        },
        transform: function (t, n) {
          var e =
            !o("AdsAPICampaignGroupRecordUtils").hasBudget(n.campaignGroup) &&
            n.resetBudgetFields !== !1
              ? o("AdsCampaignBudgetMutationUtils").resetBudgetToDefault(
                  n.account,
                  n.campaignGroup.objective,
                  void 0,
                  t,
                  r("LoadObject").withValue(n.campaignGroup, {
                    creatorModuleID: i.id,
                  }),
                )
              : t;
          return e;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
