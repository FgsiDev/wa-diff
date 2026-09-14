__d(
  "AdsProductStoreVisitsCampaignBudgetPlugin",
  ["AdsAPIObjectives", "AdsDefaultCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "store-visits",
        pivots: { objective: r("AdsAPIObjectives").STORE_VISITS },
        getBaseDefaultDailyBudgetUSD: function (n) {
          return e;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
