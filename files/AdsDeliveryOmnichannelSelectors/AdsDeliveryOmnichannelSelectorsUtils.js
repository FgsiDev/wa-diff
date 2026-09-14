__d(
  "AdsDeliveryOmnichannelSelectorsUtils",
  ["AdsConversionsOmnichannelOptimizationGoalUtils", "AdsEmptyValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      if (e instanceof r("AdsEmptyValue")) return !0;
      var a = o(
        "AdsConversionsOmnichannelOptimizationGoalUtils",
      ).getAvailableBidStrategiesForWebAndApp(t, n);
      return e.getValues().some(function (e) {
        return e != null && a.includes(e);
      });
    }
    l.isValidBidStrategy = e;
  },
  98,
);
