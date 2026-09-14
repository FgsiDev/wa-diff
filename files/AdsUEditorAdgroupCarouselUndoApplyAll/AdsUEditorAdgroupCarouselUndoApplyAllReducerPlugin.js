__d(
  "AdsUEditorAdgroupCarouselUndoApplyAllReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupCarouselApplyAllSnapshotProvider",
    "AdsUEditorAdgroupCarouselUndoApplyAllDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            adgroupSnapshots: r(
              "AdsUEditorAdgroupCarouselApplyAllSnapshotProvider",
            ).toFluxSelector(),
          },
          function (e, t, n) {
            var r = n.adgroupSnapshots;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n;
                return (n = r.get(t)) != null ? n : e;
              },
            );
          },
          o("AdsUEditorAdgroupCarouselUndoApplyAllDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
