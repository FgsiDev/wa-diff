__d(
  "AdsConversionsOmnichannelOptimizationGoalUtils",
  ["AdsAPIBidStrategies", "AdsAPIObjectives", "AdsVolumeROASUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e === r("AdsAPIObjectives").OUTCOME_SALES) {
        var n = t
          ? [
              r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
              r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP,
            ]
          : [
              r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP,
              r("AdsAPIBidStrategies").COST_CAP,
              r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
            ];
        return (
          r("gkx")("15045") &&
            n.push(r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS),
          n
        );
      } else
        return [
          r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
          r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP,
        ];
    }
    function s() {
      var e = [
        r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
        r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP,
      ];
      return (
        o("AdsVolumeROASUtils").isVolumeROASEnabled() &&
          e.push(r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS),
        e
      );
    }
    function u() {
      var e = [
        r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
        r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP,
        r("AdsAPIBidStrategies").COST_CAP,
      ];
      return (
        o("AdsVolumeROASUtils").isVolumeROASEnabled() &&
          e.push(r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS),
        e
      );
    }
    ((l.getAvailableBidStrategiesForWebAndApp = e),
      (l.getAvailableBidStrategies = s),
      (l.getAvailableBidStrategiesForWebsiteAndShop = u));
  },
  98,
);
