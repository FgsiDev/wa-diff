__d(
  "AdsAuctionReachDynamicCreationOptimizationPlugin",
  ["AdsAPIObjectives", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "dynamic_creative_optimization",
        key: "auction/reach",
        pivots: {
          buyingType: r("AdsBuyingTypes").AUCTION,
          objective: r("AdsAPIObjectives").REACH,
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
