__d(
  "AdsInsightsShowExportMenuActionLoggerPlugin",
  ["adsMgmtGetInsightsExportActionOptionalData", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = t.requestTime != null ? t.requestTime * 1e3 : void 0;
          r("adsMgmtLogger")(
            "tableui_user_action",
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
