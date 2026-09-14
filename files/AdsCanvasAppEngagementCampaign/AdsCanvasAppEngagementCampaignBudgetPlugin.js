__d(
  "AdsCanvasAppEngagementCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsCanvasAppCampaignBudgetPluginCommon",
    "AdsDefaultCampaignBudgetPlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignBudgetPlugin"),
        r("AdsCanvasAppCampaignBudgetPluginCommon"),
        {
          type: "campaign/budget",
          key: "canvas-app-engagement",
          pivots: { objective: r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
