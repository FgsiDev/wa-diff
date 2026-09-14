__d(
  "ShopsAdsAdapterCampaignConversionOptimizationRulePlugin",
  [
    "AdsAPIOptimizationGoals",
    "AdsCampaignOptimizationPluginResolver",
    "AdsOptimizationMutationUtils",
    "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "shops_ads_adapter_website_and_shop_opt_in_rule",
        key: "shops_ads_reset_optimization_fields_rule",
        isCompatible: function (t) {
          return null;
        },
        pivots: { ruleType: "shops_ads_reset_optimization_fields_rule" },
        transform: function (t, n) {
          var e = n.account,
            a = n.campaignGroup,
            i = n.objective,
            l = n.promotedObjectType,
            s = n.resetAttributionSettings,
            u = n.resetOptimizationRelatedFields;
          if (u === !1) return t;
          var c = t == null ? void 0 : t.optimization_goal;
          if (
            c === r("AdsAPIOptimizationGoals").VALUE ||
            c === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND
          )
            return t;
          var d = r("AdsCampaignOptimizationPluginResolver").resolve({
              objective: i,
              promotedObjectType: l,
            }),
            m = r("adsCampaignGroupBudgetGetDefaultOptimizationGoalParams")(
              e,
              a,
              t,
            ),
            p = r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
          return o(
            "AdsOptimizationMutationUtils",
          ).resetOptimizationRelatedFields(
            e,
            t,
            d,
            i,
            babelHelpers.extends({}, m, { prefilledOptimizationGoal: p }),
            void 0,
            s,
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
