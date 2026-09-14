__d(
  "AdsInsightsExportCreatedDataActionLoggerPlugin",
  ["adsMgmtGetInsightsExportActionOptionalData", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = t.requestTime != null ? t.requestTime * 1e3 : void 0;
          r("adsMgmtLogger")(
            "ads_insights_export_created",
            r("adsMgmtGetInsightsExportActionOptionalData")(
              t.actionType,
              e,
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
