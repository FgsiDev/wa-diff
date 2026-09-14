__d(
  "AdsConversionsCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsWebsiteCampaignBudgetPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignBudgetPlugin"),
        r("AdsWebsiteCampaignBudgetPluginCommon"),
        {
          type: "campaign/budget",
          key: "conversions",
          pivots: { objective: r("AdsAPIObjectives").CONVERSIONS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
