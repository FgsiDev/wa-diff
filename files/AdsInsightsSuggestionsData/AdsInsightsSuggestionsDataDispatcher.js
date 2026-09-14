__d(
  "AdsInsightsSuggestionsDataDispatcher",
  [
    "AdsInsightsEdgeFilterUtil",
    "AdsInsightsFetchSuggestionsErrorAction",
    "AdsInsightsFetchSuggestionsSuccessAction",
    "AdsInsightsSuggestionsDataLoader",
    "AdsMgmtSuggestedColumnsGatingUtils",
    "AdsPEAnomalyDetectionFilterUtil",
    "asyncToGeneratorRuntime",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (t.length !== 0) {
              var l = [];
              if (
                !o(
                  "AdsMgmtSuggestedColumnsGatingUtils",
                ).getIsAccountInSuggestedColumnsExpansionWithoutExposure()
              ) {
                var s = o("AdsPEAnomalyDetectionFilterUtil").isAnomalyFilter(
                  e.filter,
                )
                  ? o(
                      "AdsPEAnomalyDetectionFilterUtil",
                    ).generateAnomalyFilterSpec(e.filter)
                  : e.filter;
                l = o("AdsInsightsEdgeFilterUtil").toSuggestionsEdgeParam(
                  s,
                  n.currencyCode,
                  e.objectType,
                );
              }
              var u = { fields: t, filtering: l };
              r("promiseDone")(
                o("AdsInsightsSuggestionsDataLoader").fetch(u, n, a),
                function (e) {
                  return r("AdsInsightsFetchSuggestionsSuccessAction").dispatch(
                    { params: u, suggestions: e },
                    {
                      line: "65",
                      module: "AdsInsightsSuggestionsDataDispatcher.js",
                      moduleID: i.id,
                    },
                  );
                },
                function (e) {
                  return r("AdsInsightsFetchSuggestionsErrorAction").dispatch(
                    { error: e, params: u },
                    {
                      line: "70",
                      module: "AdsInsightsSuggestionsDataDispatcher.js",
                      moduleID: i.id,
                    },
                  );
                },
              );
            }
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.fetch = e;
  },
  98,
);
