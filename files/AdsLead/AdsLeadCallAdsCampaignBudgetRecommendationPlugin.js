__d(
  "AdsLeadCallAdsCampaignBudgetRecommendationPlugin",
  [
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
    "AdsUEditorCallAdsBudgetRecommendationUitls",
    "AdsWebsiteCampaignBudgetPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r(
        "AdsWebsiteCampaignBudgetPluginCommon",
      ).getBaseDefaultDailyBudgetUSD(),
      s = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "lead/call-ads-budget-recommendation",
        pivots: {
          objective: r("AdsAPIObjectives").LEAD_GENERATION,
          promotedObjectType: r("AdsPromotedObjectTypes").PHONE_CALL,
          destinationType: r("AdCampaignDestination").PHONE_CALL,
        },
        getDefaultDailyBudgetUSD: function () {
          var t = o(
            "AdsUEditorCallAdsBudgetRecommendationUitls",
          ).getCallAdsSABRAdAccountDailyBudgetRecommendation();
          return t != null &&
            o(
              "AdsUEditorCallAdsBudgetRecommendationUitls",
            ).isEligibleForCallAdsSimilarAdvertiserBudgetRecommendation()
            ? t
            : e;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
