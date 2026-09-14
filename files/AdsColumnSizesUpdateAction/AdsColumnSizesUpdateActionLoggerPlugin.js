__d(
  "AdsColumnSizesUpdateActionLoggerPlugin",
  [
    "AdsColumnSizesUpdateActionFlux",
    "adsMgmtCurrentNavigationEvent",
    "adsMgmtLogger",
    "adsMgmtPreviousNavigationEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "insights_table_column_sizes_updated",
            babelHelpers.extends(
              {
                action_type: o("AdsColumnSizesUpdateActionFlux").actionType,
                insights_column_name: t.columnGroup,
                new_value: t.newWidth.toString(),
                old_value: t.oldWidth.toString(),
              },
              t.logData,
              r("adsMgmtPreviousNavigationEvent")(),
              r("adsMgmtCurrentNavigationEvent")(),
            ),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
