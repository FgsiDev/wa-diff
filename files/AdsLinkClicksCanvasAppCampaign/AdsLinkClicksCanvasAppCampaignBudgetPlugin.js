__d(
  "AdsLinkClicksCanvasAppCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsCanvasAppCampaignBudgetPluginCommon",
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
          key: "link-clicks/canvas-app",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
