__d(
  "AdsSelectionIDChangeTableUILoggerPlugin",
  ["AdsPETableSelectionLoggerHelper", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "tableui_user_action",
            babelHelpers.extends(
              {},
              o("AdsPETableSelectionLoggerHelper").getTableSelectionData(t),
            ),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
