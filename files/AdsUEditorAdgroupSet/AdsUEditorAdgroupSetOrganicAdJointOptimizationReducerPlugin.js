__d(
  "AdsUEditorAdgroupSetOrganicAdJointOptimizationReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsOrganicAdJointOptimizationOptInActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).is_organic_ad_joint_optimized.set(t.shouldOptIn ? 1 : 0, e);
            });
          },
          o("AdsOrganicAdJointOptimizationOptInActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
