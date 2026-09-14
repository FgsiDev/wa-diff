__d(
  "AdsReportBuilderCreateCustomMetricSuccessAction",
  [
    "AdsReportBuilderCreateCustomMetricSuccessStatReducerPlugin",
    "AdsReportBuilderCreateOrUpdateCustomMetricSuccessListReducerPlugin",
    "AdsReportBuilderCustomMetricsDialogProvider",
    "AdsReportBuilderCustomMetricsListDataProvider",
    "AdsReportBuilderCustomMetricsStatDataProvider",
    "AdsReportBuilderManageCustomMetricsDialogStateProvider",
    "AdsReportBuilderMutatePersistentCustomMetricSuccessReducerPlugins",
    "AdsReportBuilderMutateSuccessCustomMetricReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsReportBuilderCreateCustomMetricSuccessStatReducerPlugin"),
            n("AdsReportBuilderCustomMetricsStatDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n(
              "AdsReportBuilderCreateOrUpdateCustomMetricSuccessListReducerPlugin",
            ),
            n("AdsReportBuilderCustomMetricsListDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n(
              "AdsReportBuilderMutatePersistentCustomMetricSuccessReducerPlugins",
            ).onCreate,
            n("AdsReportBuilderManageCustomMetricsDialogStateProvider"),
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
      "PowerEditor.REPORT_BUILDER.CREATE_CUSTOM_METRIC_SUCCESS",
    );
    a.exports = e;
  },
  null,
);
