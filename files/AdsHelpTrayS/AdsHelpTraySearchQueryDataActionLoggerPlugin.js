__d(
  "AdsHelpTraySearchQueryDataActionLoggerPlugin",
  ["adsMgmtGetWindowDimensions", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "help_tray_search",
            babelHelpers.extends(
              { query: t.query },
              r("adsMgmtGetWindowDimensions")(),
            ),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
