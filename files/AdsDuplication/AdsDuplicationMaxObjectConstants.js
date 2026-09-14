__d(
  "AdsDuplicationMaxObjectConstants",
  ["AdCopiesMaxObjectsConfig", "AdsDuplicationLowerFragmentLimitGKUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o(
      "AdsDuplicationLowerFragmentLimitGKUtils",
    ).shouldUseLowerAdCopiesLimit({ shouldSilentCheck: !0 })
      ? r("AdCopiesMaxObjectsConfig").ADCOPIES_MAX_OBJECTS_EXPERIMENT
      : r("AdCopiesMaxObjectsConfig").SV_ADCOPIES_MAX_OBJECTS;
    l.ADS_DUPLICATION_FRAGMENT_CREATION_LIMIT = e;
  },
  98,
);
