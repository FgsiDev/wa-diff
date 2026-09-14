__d(
  "AdsUEditorAdgroupCachedSetNonAutomaticFlowDoFSpecActionHandler",
  [
    "AdsAdgroupRecordAccessors",
    "AdsUEditorAdgroupSetAutomaticFlowOptimizationActionFlux",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsUEditorAdgroupSetAutomaticFlowOptimizationActionFlux")
          .actionType,
        mutate: function (t, n) {
          var e = t.adgroupIDs,
            o = t.adgroupsToCache,
            a = t.enableAutomaticFlow;
          return r("isTruthy")(o) && a
            ? n.withMutations(function (t) {
                return e.reduce(function (e, t) {
                  var n = o.get(t);
                  if (n == null) return e;
                  var a = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.get(n);
                  return (
                    a != null &&
                      a.degrees_of_freedom_type !== "USER_ENROLLED_AUTOFLOW" &&
                      e.setIn([t, "nonAutomaticFlowDoFSpec"], a),
                    e
                  );
                }, t);
              })
            : n;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
