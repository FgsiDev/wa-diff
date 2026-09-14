__d(
  "adsCampaignGroupBudgetGetCampaignsBudgetMode",
  ["adsCampaignIsCampaignActive", "adsCampaignIsCampaignPaused"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.filter(function (e) {
          return (
            r("adsCampaignIsCampaignActive")(e) ||
            r("adsCampaignIsCampaignPaused")(e)
          );
        }),
        n = t.some(function (e) {
          return !!e.daily_budget;
        }),
        o = t.some(function (e) {
          return !!e.lifetime_budget;
        });
      return (n && !o) || (!n && o) ? (n ? "daily" : "lifetime") : null;
    }
    l.default = e;
  },
  98,
);
