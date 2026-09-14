__d(
  "AdsReportBuilderMetricUpdateAction",
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
            "AdsReportBuilderViewReportPerfScenariosLoggerPlugins",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsReportBuilderViewReportPerfScenariosLoggerPlugins.AbandonViewReportInitialPageLoadLoggerPlugin",
                e.AbandonViewReportInitialPageLoadLoggerPlugin,
                {},
                ["AdsReportBuilderRoutingRegistry"],
              );
            },
          ),
        ];
      },
      "PowerEditor.REPORT_BUILDER.METRIC_CHANGE",
    );
    a.exports = e;
  },
  null,
);
