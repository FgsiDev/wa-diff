__d(
  "AdsUEditorAdgroupSetVideoOptimizationReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetMediaOptimizationMutator",
    "AdsUEditorAdgroupSetVideoOptimizationDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupSetMediaOptimizationMutator",
              ).setVideoOptimizationEnrollment(
                e,
                t.videoID,
                t.variant,
                t.isAdopted,
                t.enrollmentActionType,
              );
            });
          },
          [r("AdsUEditorAdgroupSetVideoOptimizationDataActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
