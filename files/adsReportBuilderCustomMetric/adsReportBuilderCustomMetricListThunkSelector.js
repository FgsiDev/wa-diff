__d(
  "adsReportBuilderCustomMetricListThunkSelector",
  [
    "AdsReportBuilderCustomMetricsListDataProvider",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsReportBuilderCustomMetricsListDataProvider").toFluxStore(),
      s = r("adsCreateStoreThunkSelector")(e, function (t) {
        return e.getState().get(t);
      }),
      u = s;
    l.default = u;
  },
  98,
);
