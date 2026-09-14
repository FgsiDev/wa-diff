__d(
  "AdsReportBuilderUpdateCustomMetricSuccessAction",
  [
    "AdsReportBuilderCreateOrUpdateCustomMetricSuccessListReducerPlugin",
    "AdsReportBuilderCustomMetricsDialogProvider",
    "AdsReportBuilderCustomMetricsListDataProvider",
    "AdsReportBuilderCustomMetricsStatDataProvider",
    "AdsReportBuilderManageCustomMetricsDialogStateProvider",
    "AdsReportBuilderMutatePersistentCustomMetricSuccessReducerPlugins",
    "AdsReportBuilderMutateSuccessCustomMetricReducerPlugin",
    "AdsReportBuilderUpdateCustomMetricSuccessReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
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
            ).onUpdate,
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
          n("Laminar").__createReducer(
            n("AdsReportBuilderUpdateCustomMetricSuccessReducerPlugin"),
            n("AdsReportBuilderCustomMetricsStatDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.REPORT_BUILDER.UPDATE_CUSTOM_METRIC_SUCCESS",
    );
    a.exports = e;
  },
  null,
);
