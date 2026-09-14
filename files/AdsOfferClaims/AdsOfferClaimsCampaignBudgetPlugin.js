__d(
  "AdsOfferClaimsCampaignBudgetPlugin",
  ["AdsAPIObjectives", "AdsDefaultCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1100,
      s = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget",
        key: "offer-claims",
        pivots: { objective: r("AdsAPIObjectives").OFFER_CLAIMS },
        getBaseDefaultDailyBudgetUSD: function (n) {
          return e;
        },
      }),
      u = s;
    l.default = u;
  },
  98,
);
