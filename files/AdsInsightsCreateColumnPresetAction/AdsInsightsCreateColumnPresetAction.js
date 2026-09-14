__d(
  "AdsInsightsCreateColumnPresetAction",
  ["Laminar", "ifRequired_FOR_LAMINAR_CODEGEN"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsInsightsColumnPresetActionLoggerPlugins",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsInsightsColumnPresetActionLoggerPlugins.AdsInsightsCreateColumnPresetActionLoggerPlugin",
                e.AdsInsightsCreateColumnPresetActionLoggerPlugin,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "ADS_INSIGHTS_CREATE_COLUMN_PRESET",
    );
    a.exports = e;
  },
  null,
);
