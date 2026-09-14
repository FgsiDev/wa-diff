__d(
  "AdsUEditorAdgroupCachedNonAutomaticFlowLiteDoFSpecOpenCFPActionHandler",
  [
    "AdsAdgroupRecordAccessors",
    "AdsOpenCreativeFeaturesPlatformModalActionFlux",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsOpenCreativeFeaturesPlatformModalActionFlux").actionType,
        mutate: function (t, n) {
          var e = t.adgroupIDs,
            o = t.adgroupsToCache;
          return r("isTruthy")(o)
            ? n.withMutations(function (t) {
                return e.reduce(function (e, t) {
                  var n = o.get(t),
                    a =
                      n != null
                        ? r(
                            "AdsAdgroupRecordAccessors",
                          ).creative.degrees_of_freedom_spec.get(n)
                        : null;
                  return (
                    a != null &&
                      a.degrees_of_freedom_type !== "USER_ENROLLED_AUTOFLOW" &&
                      e.setIn([t, "cfpDOFspec"], a),
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
