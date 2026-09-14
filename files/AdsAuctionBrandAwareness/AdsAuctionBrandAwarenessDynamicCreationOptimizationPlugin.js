__d(
  "AdsAuctionBrandAwarenessDynamicCreationOptimizationPlugin",
  ["AdsAPIObjectives", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "dynamic_creative_optimization",
        key: "auction/brand_awareness",
        pivots: {
          buyingType: r("AdsBuyingTypes").AUCTION,
          objective: r("AdsAPIObjectives").BRAND_AWARENESS,
        },
        isDynamicCreativeOptimizationSupported: function (t) {
          return t !== !0;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
