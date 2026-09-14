__d(
  "AdsInsightsTableComparisonColumnCollapseDataActionLoggerPlugin",
  ["adsMgmtGetInsightsTableActionsOptionalData", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "insights_table_comparison_column_collapse",
            r("adsMgmtGetInsightsTableActionsOptionalData")(
              t.actionType,
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
