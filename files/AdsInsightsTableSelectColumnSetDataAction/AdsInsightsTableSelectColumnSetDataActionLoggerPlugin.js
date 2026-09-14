__d(
  "AdsInsightsTableSelectColumnSetDataActionLoggerPlugin",
  ["adsMgmtGetInsightsTableActionsOptionalData", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = r("adsMgmtGetInsightsTableActionsOptionalData")(
            t.actionType,
            t.logData,
          );
          r("adsMgmtLogger")("insights_table_select_column_set", e);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
