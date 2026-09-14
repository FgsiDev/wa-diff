__d(
  "AdsInsightsExportDownloadedDataActionLoggerPlugin",
  ["adsMgmtGetInsightsExportActionOptionalData", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "ads_insights_export_downloaded",
            r("adsMgmtGetInsightsExportActionOptionalData")(
              t.actionType,
              t.requestTime * 1e3,
              t.logData,
            ),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
