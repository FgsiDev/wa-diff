__d(
  "AdsInsightsFetchInsightsEdgeErrorAction",
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
            "AdsInsightsFetchInsightsEdgeErrorActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsInsightsFetchInsightsEdgeErrorActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "ADS_INSIGHTS_FETCH_INSIGHTS_EDGE_ERROR",
    );
    a.exports = e;
  },
  null,
);
