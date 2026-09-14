__d(
  "AdsReportBuilderDeleteCustomMetricSuccessAction",
  [
    "AdsReportBuilderCustomMetricsDialogProvider",
    "AdsReportBuilderCustomMetricsListDataProvider",
    "AdsReportBuilderCustomMetricsStatDataProvider",
    "AdsReportBuilderDeleteCustomMetricSuccessListReducerPlugin",
    "AdsReportBuilderDeleteCustomMetricSuccessStatReducerPlugin",
    "AdsReportBuilderMutateSuccessCustomMetricReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsReportBuilderDeleteCustomMetricSuccessListReducerPlugin"),
            n("AdsReportBuilderCustomMetricsListDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsReportBuilderDeleteCustomMetricSuccessStatReducerPlugin"),
            n("AdsReportBuilderCustomMetricsStatDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsReportBuilderMutateSuccessCustomMetricReducerPlugin"),
            n("AdsReportBuilderCustomMetricsDialogProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.REPORT_BUILDER.DELETE_CUSTOM_METRIC_SUCCESS",
    );
    a.exports = e;
  },
  null,
);
