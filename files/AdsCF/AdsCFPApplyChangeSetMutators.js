__d(
  "AdsCFPApplyChangeSetMutators",
  ["AdsAdgroupRecordAccessors", "ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l, u) {
      var c = e;
      return (
        o.map(function (e) {
          c = s(
            c,
            t,
            e,
            n,
            i == null ? void 0 : i.get(e),
            l == null ? void 0 : l.get(e),
            u,
          );
        }),
        a != null
          ? (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.advantage_plus_creative.enroll_status.set(
              a === !0 ? "OPT_IN" : "OPT_OUT",
              c,
            ))
          : (c = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.advantage_plus_creative.delete(
              c,
            )),
        c
      );
    }
    function s(e, t, n, o, a, i, l) {
      var s = e;
      return (
        r("ifRequired")("AdsCreativeOptimizationToolsPlugins", function (e) {
          var r = e.getByMixed(n);
          return (
            (r == null ? void 0 : r.mutateAdgroupCFP) != null &&
              (s = r.mutateAdgroupCFP(s, t, o, a, i, l)),
            s
          );
        }),
        s
      );
    }
    ((l.applyChangeSetByAvailablePlugin = e),
      (l.applyChangeSetBySingleTool = s));
  },
  98,
);
