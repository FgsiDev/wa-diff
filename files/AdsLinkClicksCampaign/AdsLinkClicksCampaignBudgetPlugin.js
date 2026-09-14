__d(
  "AdsLinkClicksCampaignBudgetPlugin",
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
          key: "link-clicks",
          pivots: { objective: r("AdsAPIObjectives").LINK_CLICKS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
