__d(
  "AdsPEFilterClearActionLoggerPlugin",
  [
    "AdsFilterChangeTypes",
    "adsMgmtCurrentNavigationEvent",
    "adsMgmtLogger",
    "adsMgmtPreviousNavigationEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e;
          r("adsMgmtLogger")(
            "filter_changed",
            babelHelpers.extends(
              ((e = {}), (e.action_type = r("AdsFilterChangeTypes").CLEAR), e),
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
