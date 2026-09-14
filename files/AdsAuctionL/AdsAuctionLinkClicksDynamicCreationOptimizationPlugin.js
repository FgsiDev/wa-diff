__d(
  "AdsAuctionLinkClicksDynamicCreationOptimizationPlugin",
  ["AdsAPIObjectives", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "dynamic_creative_optimization",
        key: "auction/link_clicks",
        pivots: {
          buyingType: r("AdsBuyingTypes").AUCTION,
          objective: r("AdsAPIObjectives").LINK_CLICKS,
        },
        isDynamicCreativeOptimizationSupported: function () {
          return !0;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
