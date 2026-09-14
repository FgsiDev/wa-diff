__d(
  "AdsInsightsTableToggleColumnSetEditorDataActionLoggerPlugin",
  ["adsMgmtGetInsightsTableActionsOptionalData", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "insights_table_toggle_column_set_editor",
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
