__d(
  "AdsReportBuilderCustomMetricsLoadedStatReducerPlugin",
  ["AdsReportBuilderCustomMetricRecord", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.withMutations(function (e) {
            n.data.forEach(function (t) {
              if (t.hasValue()) {
                var n = t.getValueEnforcing();
                n instanceof Error ||
                  !r("immutable").Set.isSet(n) ||
                  n.forEach(function (t) {
                    e.set(
                      t.id,
                      new (r("AdsReportBuilderCustomMetricRecord"))(t),
                    );
                  });
              }
            });
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
