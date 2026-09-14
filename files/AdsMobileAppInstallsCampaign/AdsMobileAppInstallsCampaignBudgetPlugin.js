__d(
  "AdsMobileAppInstallsCampaignBudgetPlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultCampaignBudgetPlugin",
    "AdsMobileAppCampaignBudgetPluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultCampaignBudgetPlugin"),
        r("AdsMobileAppCampaignBudgetPluginCommon"),
        {
          type: "campaign/budget",
          key: "mobile-app-installs",
          pivots: { objective: r("AdsAPIObjectives").MOBILE_APP_INSTALLS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
