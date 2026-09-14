__d(
  "AdsReportBuilderCustomMetricsLoadedListReducerPlugin",
  ["AdsReportBuilderCustomMetricKey", "LoadObject", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.withMutations(function (e) {
            n.data.forEach(function (t, n) {
              var o = t.map(function (e) {
                return r("immutable").Set.isSet(e)
                  ? e.map(function (e) {
                      return e.id;
                    })
                  : e instanceof Error
                    ? r("LoadObject").withError(e, { creatorModuleID: i.id })
                    : r("LoadObject").empty({ creatorModuleID: i.id });
              });
              e.set(r("AdsReportBuilderCustomMetricKey").hashCode(n), o);
            });
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
