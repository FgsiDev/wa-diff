__d(
  "adsCampaignGroupBudgetResolveOptimizationPlugin",
  ["AdsAPICampaignRecordUtils", "AdsCampaignOptimizationPluginResolver"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.objective,
        a = o("AdsAPICampaignRecordUtils").getPromotedObjectType(n, t);
      return r("AdsCampaignOptimizationPluginResolver").resolve({
        objective: n,
        promotedObjectType: a,
        destinationType: o("AdsAPICampaignRecordUtils").getDestinationType(t),
      });
    }
    l.default = e;
  },
  98,
);
