__d(
  "AdsReportBuilderCreateCustomMetricFailAction",
  [
    "AdsReportBuilderCustomMetricsDialogProvider",
    "AdsReportBuilderMutateFailCustomMetricReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsReportBuilderMutateFailCustomMetricReducerPlugin"),
            n("AdsReportBuilderCustomMetricsDialogProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.REPORT_BUILDER.CREATE_CUSTOM_METRIC_FAIL",
    );
    a.exports = e;
  },
  null,
);
