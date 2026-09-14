__d(
  "AdsReportBuilderMutatePersistentCustomMetricSuccessReducerPlugins",
  ["AdsReportBuilderManageCustomMetricsDialogState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.dialogState ===
            r("AdsReportBuilderManageCustomMetricsDialogState").HIDDEN &&
            n.customMetricRecord.metricType === "persistent"
            ? {
                dialogState: r("AdsReportBuilderManageCustomMetricsDialogState")
                  .OPEN,
              }
            : t;
        },
      },
      s = {
        reduce: function (t, n) {
          return t.dialogState ===
            r("AdsReportBuilderManageCustomMetricsDialogState").HIDDEN &&
            n.metricType === "persistent"
            ? {
                dialogState: r("AdsReportBuilderManageCustomMetricsDialogState")
                  .OPEN,
              }
            : t;
        },
      };
    ((l.onCreate = e), (l.onUpdate = s));
  },
  98,
);
