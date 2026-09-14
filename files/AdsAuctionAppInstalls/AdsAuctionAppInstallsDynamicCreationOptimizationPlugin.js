__d(
  "AdsAuctionAppInstallsDynamicCreationOptimizationPlugin",
  ["AdsAPIObjectives", "AdsBuyingTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "dynamic_creative_optimization",
        key: "auction/mobile_app_installs",
        pivots: {
          buyingType: r("AdsBuyingTypes").AUCTION,
          objective: r("AdsAPIObjectives").APP_INSTALLS,
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
