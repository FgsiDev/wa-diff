__d(
  "AdsLinkClicksAppCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsMobileAppCampaignBudgetPluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignBudgetPlugin"),
        r("AdsMobileAppCampaignBudgetPluginCommon"),
        {
          type: "campaign/budget",
          key: "link-clicks/app",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
