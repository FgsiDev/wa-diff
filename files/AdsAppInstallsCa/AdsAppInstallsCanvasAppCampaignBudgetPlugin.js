__d(
  "AdsAppInstallsCanvasAppCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsCanvasAppCampaignBudgetPluginCommon",
    "AdsCanvasAppConstants",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignBudgetPlugin"),
        r("AdsCanvasAppCampaignBudgetPluginCommon"),
        {
          type: "campaign/budget",
          key: "app-installs/canvas-app",
          pivots: {
            objective: r("AdsAPIObjectives").APP_INSTALLS,
            promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
          },
          getDefaultDailyBudgetUSD: function (t) {
            return r("AdsCanvasAppConstants").DEFAULT_DAILY_BUDGET;
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
