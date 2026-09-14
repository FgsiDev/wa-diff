__d(
  "AdsPacRecompositionSpecMutators",
  ["AdsAdgroupRecordAccessors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return ((t = e.creative) == null ||
      (t = t.degrees_of_freedom_spec) == null ||
      (t = t.creative_features_spec) == null
        ? void 0
        : t.pac_recomposition) == null
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.pac_recomposition.delete(
            e,
          );
    }
    l.deletePacRecompositionSpec = e;
  },
  98,
);
