__d(
  "AdsInsightsStoreVisitsDeprecationConfig",
  ["AdsInsightsColumns"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return [
        o("AdsInsightsColumns").makeActionID(
          "store_visit_actions",
          "store_visit",
        ),
        o("AdsInsightsColumns").makeActionID(
          "cost_per_store_visit_action",
          "store_visit",
        ),
      ];
    }
    l.getDeprecatedStoreVisitsMetrics = e;
  },
  98,
);
