__d(
  "AdsLeadGenerationCampaignBudgetPlugin",
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
          key: "lead-generation",
          pivots: { objective: r("AdsAPIObjectives").LEAD_GENERATION },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
