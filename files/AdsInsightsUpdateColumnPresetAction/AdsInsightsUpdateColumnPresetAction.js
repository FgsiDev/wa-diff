__d(
  "AdsInsightsUpdateColumnPresetAction",
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
                "AdsInsightsColumnPresetActionLoggerPlugins.AdsInsightsUpdateColumnPresetActionLoggerPlugin",
                e.AdsInsightsUpdateColumnPresetActionLoggerPlugin,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "ADS_INSIGHTS_UPDATE_COLUMN_PRESET",
    );
    a.exports = e;
  },
  null,
);
