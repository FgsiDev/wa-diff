__d(
  "adsExperimentsGetIneligibleCampaignsWithMixedBudgets",
  ["AdsExperimentsBudgetUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.campaignGroup,
        n = e.campaigns,
        a = r("immutable").Map([]);
      if (!o("AdsExperimentsBudgetUtils").isCBOEnabled(t)) {
        var i = n.filter(function (e) {
            return e.daily_budget != null && e.daily_budget > 0;
          }),
          l = n.filter(function (e) {
            return e.lifetime_budget != null && e.lifetime_budget > 0;
          });
        if (i.size !== 0 && l.size !== 0) {
          var s = i.size === l.size && i.size !== 1,
            u = s ? a : i.size < l.size ? i : l;
          return { campaignIDs: new Set(u.keys()) };
        }
      }
    }
    l.default = e;
  },
  98,
);
