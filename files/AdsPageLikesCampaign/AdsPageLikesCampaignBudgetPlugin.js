__d(
  "AdsPageLikesCampaignBudgetPlugin",
  ["AdsAPIObjectives", "AdsDefaultCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { daily: 2500, lifetime: 5e4 },
      s = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "page-likes",
        pivots: { objective: r("AdsAPIObjectives").PAGE_LIKES },
        getBaseDefaultDailyBudgetUSD: function (n) {
          return e.daily;
        },
        getBaseDefaultLifetimeBudgetUSD: function (n) {
          return e.lifetime;
        },
        shouldOverrideDailyBudgetWithDestination: function () {
          return !0;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
