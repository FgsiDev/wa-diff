__d(
  "adsReportBuilderCustomMetricStatThunkSelector",
  [
    "AdsReportBuilderCustomMetricsStatDataProvider",
    "adsCreateStoreThunkSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsReportBuilderCustomMetricsStatDataProvider").toFluxStore(),
      s = r("adsCreateStoreThunkSelector")(e, function (t) {
        return t.map(function (t) {
          return r("immutable")
            .Map()
            .withMutations(function (n) {
              var r = e.getState();
              t.forEach(function (e) {
                return n.set(e, r.get(e));
              });
            });
        });
      }),
      u = s;
    l.default = u;
  },
  98,
);
