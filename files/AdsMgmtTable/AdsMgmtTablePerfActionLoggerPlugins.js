__d(
  "AdsMgmtTablePerfActionLoggerPlugins",
  [
    "AdsPERouterHelper",
    "AdsPerfTiming",
    "adsMgmtLogger",
    "adsPEIsFirstPageSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      log: function (t) {
        var e = babelHelpers.extends(
          {},
          r("AdsPERouterHelper").getInitialStateLogInfo(),
          {
            is_first_page: r("adsPEIsFirstPageSelector")(),
            time_since_load: Date.now() - o("AdsPerfTiming").start,
          },
        );
        r("adsMgmtLogger")("table_init", e, "performance");
      },
    };
    l.AdsMgmtTablePerfActionInteractionStartLoggerPlugin = e;
  },
  98,
);
