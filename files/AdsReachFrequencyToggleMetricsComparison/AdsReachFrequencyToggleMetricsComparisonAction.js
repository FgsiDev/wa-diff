__d(
  "AdsReachFrequencyToggleMetricsComparisonAction",
  [
    "AdsReachFrequencyToggleMetricsComparisonDataProvider",
    "AdsReachFrequencyToggleMetricsComparisonReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsReachFrequencyToggleMetricsComparisonReducerPlugin"),
            n("AdsReachFrequencyToggleMetricsComparisonDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsReachFrequencyFlow.TOGGLE_METRICS_COMPARISON",
    );
    a.exports = e;
  },
  null,
);
