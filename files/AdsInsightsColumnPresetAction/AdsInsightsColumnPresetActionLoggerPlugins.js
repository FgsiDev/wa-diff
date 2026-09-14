__d(
  "AdsInsightsColumnPresetActionLoggerPlugins",
  [
    "AdsInsightsCreateColumnPresetActionFlux",
    "AdsInsightsUpdateColumnPresetActionFlux",
    "adsMgmtCurrentNavigationEvent",
    "adsMgmtLogger",
    "adsMgmtPreviousNavigationEvent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "update_column_preset",
            babelHelpers.extends(
              {
                action_type: o("AdsInsightsUpdateColumnPresetActionFlux")
                  .actionType,
              },
              t.logData,
              r("adsMgmtPreviousNavigationEvent")(),
              r("adsMgmtCurrentNavigationEvent")(),
            ),
          );
        },
      },
      s = {
        log: function (t) {
          r("adsMgmtLogger")(
            "create_column_preset",
            babelHelpers.extends(
              {
                action_type: o("AdsInsightsCreateColumnPresetActionFlux")
                  .actionType,
              },
              t,
              r("adsMgmtPreviousNavigationEvent")(),
              r("adsMgmtCurrentNavigationEvent")(),
            ),
          );
        },
      };
    ((l.AdsInsightsUpdateColumnPresetActionLoggerPlugin = e),
      (l.AdsInsightsCreateColumnPresetActionLoggerPlugin = s));
  },
  98,
);
