__d(
  "AdsNavigationChangeNavigationStateDataActionLoggerPlugin",
  [
    "AdsNavigationChangeNavigationStateDataActionFlux",
    "adsMgmtCurrentNavigationEvent",
    "adsMgmtLogger",
    "adsMgmtPreviousNavigationEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.isInit !== !0 &&
            (t.navState.tool === "MANAGE_ADS" ||
              (t.navState.tool === "REPORTING" && t.navSource == "left_nav")) &&
            r("adsMgmtLogger")(
              "tableui_user_action",
              babelHelpers.extends(
                {
                  action_type: o(
                    "AdsNavigationChangeNavigationStateDataActionFlux",
                  ).actionType,
                  event_source: t.navSource,
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
