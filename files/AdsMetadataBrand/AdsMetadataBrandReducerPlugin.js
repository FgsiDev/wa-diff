__d(
  "AdsMetadataBrandReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMetadataBrandToggleActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        manual: "MANUAL",
        element_changed: "DEFAULT",
        sticky: "STICKY",
        default_on: "DEFAULT_OPT_IN",
      },
      s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (t, n) {
            var a = n.shouldEnable ? "OPT_IN" : "OPT_OUT";
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.brand.enroll_status.set(a),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.brand.action_metadata.type.set(
                  e[n.actionSourceType],
                ),
              ),
            );
          },
          [r("AdsMetadataBrandToggleActionFlux").actionType],
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
