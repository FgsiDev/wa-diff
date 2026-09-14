__d(
  "AdsSelectionChangeTableUILoggerPlugin",
  [
    "adsMgmtCurrentNavigationEvent",
    "adsMgmtLogger",
    "adsMgmtPreviousNavigationEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "tableui_user_action",
            babelHelpers.extends(
              {},
              t.logData,
              r("adsMgmtPreviousNavigationEvent")(),
              r("adsMgmtCurrentNavigationEvent")(),
              { action_type: t.actionType },
            ),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
