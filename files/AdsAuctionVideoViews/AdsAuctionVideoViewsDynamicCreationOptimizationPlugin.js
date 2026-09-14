__d(
  "AdsAuctionVideoViewsDynamicCreationOptimizationPlugin",
  ["AdsAPIObjectives", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "dynamic_creative_optimization",
        key: "auction/video_views",
        pivots: {
          buyingType: r("AdsBuyingTypes").AUCTION,
          objective: r("AdsAPIObjectives").VIDEO_VIEWS,
        },
        isDynamicCreativeOptimizationSupported: function (t) {
          return !t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
