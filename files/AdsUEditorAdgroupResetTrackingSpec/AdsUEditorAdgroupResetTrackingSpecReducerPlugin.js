__d(
  "AdsUEditorAdgroupResetTrackingSpecReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupResetTrackingSpecDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return r("AdsAdgroupRecordAccessors").tracking_specs.set(
                r("immutable").List(),
                e,
              );
            });
          },
          o("AdsUEditorAdgroupResetTrackingSpecDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
