__d(
  "AdsAdgroupPACRelaxationSpecMutators",
  ["AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.pac_relaxation.enroll_status.set(
          t ? "OPT_IN" : "OPT_OUT",
        ),
      )(e);
    }
    l.adsPACRelaxationSpecMutator = e;
  },
  98,
);
