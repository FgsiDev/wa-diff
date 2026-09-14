__d(
  "AdsAuctionConversionsDynamicCreationOptimizationPlugin",
  ["AdsAPIObjectives", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "dynamic_creative_optimization",
        key: "auction/conversions",
        pivots: {
          buyingType: r("AdsBuyingTypes").AUCTION,
          objective: r("AdsAPIObjectives").CONVERSIONS,
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
