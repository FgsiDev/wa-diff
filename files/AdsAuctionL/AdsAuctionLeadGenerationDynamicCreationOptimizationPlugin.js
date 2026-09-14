__d(
  "AdsAuctionLeadGenerationDynamicCreationOptimizationPlugin",
  ["AdsAPIObjectives", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "dynamic_creative_optimization",
        key: "auction/lead_generation",
        pivots: {
          buyingType: r("AdsBuyingTypes").AUCTION,
          objective: r("AdsAPIObjectives").LEAD_GENERATION,
        },
        isDynamicCreativeOptimizationSupported: function (t) {
          return !0;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
