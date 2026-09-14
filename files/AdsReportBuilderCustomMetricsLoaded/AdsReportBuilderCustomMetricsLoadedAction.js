__d(
  "AdsReportBuilderCustomMetricsLoadedAction",
  [
    "AdsReportBuilderCustomMetricsListDataProvider",
    "AdsReportBuilderCustomMetricsLoadedListReducerPlugin",
    "AdsReportBuilderCustomMetricsLoadedStatReducerPlugin",
    "AdsReportBuilderCustomMetricsStatDataProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsReportBuilderCustomMetricsLoadedListReducerPlugin"),
            n("AdsReportBuilderCustomMetricsListDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsReportBuilderCustomMetricsLoadedStatReducerPlugin"),
            n("AdsReportBuilderCustomMetricsStatDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.REPORT_BUILDER.CUSTOM_METRICS_LOADED",
    );
    a.exports = e;
  },
  null,
);
