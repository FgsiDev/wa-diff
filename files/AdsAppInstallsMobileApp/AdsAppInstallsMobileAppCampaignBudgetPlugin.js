__d(
  "AdsAppInstallsMobileAppCampaignBudgetPlugin",
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
          key: "app-installs/app",
          pivots: {
            objective: r("AdsAPIObjectives").APP_INSTALLS,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
