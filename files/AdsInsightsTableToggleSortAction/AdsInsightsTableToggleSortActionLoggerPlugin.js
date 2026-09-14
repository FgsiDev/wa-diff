__d(
  "AdsInsightsTableToggleSortActionLoggerPlugin",
  ["adsMgmtGetInsightsTableActionsOptionalData", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "ads_pe_sort_toggled",
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
