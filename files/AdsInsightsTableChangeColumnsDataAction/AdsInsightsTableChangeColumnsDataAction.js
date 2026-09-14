__d(
  "AdsInsightsTableChangeColumnsDataAction",
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
            "AdsCreativeTablePerfScenarioLoggerPlugins",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsCreativeTablePerfScenarioLoggerPlugins.AdsCreativeTableAbandonLoggerPlugin",
                e.AdsCreativeTableAbandonLoggerPlugin,
                {},
                ["AdsCreativeReportingRegistry"],
              );
            },
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsInsightsTableChangeColumnsDataActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsInsightsTableChangeColumnsDataActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "INSIGHTS_TABLE.CHANGE_COLUMNS",
    );
    a.exports = e;
  },
  null,
);
