__d(
  "AdsMobileAppCampaignBudgetPluginCommon",
  ["AdsDefaultCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4e3;
    function s(e) {
      var t = r("AdsDefaultCampaignBudgetPlugin").getDefaultDailyBudgetUSD(e),
        n = u(e);
      return Math.max(t, n);
    }
    function u(t) {
      return e;
    }
    var c = { getDefaultDailyBudgetUSD: s, getBaseDefaultDailyBudgetUSD: u };
    l.default = c;
  },
  98,
);
