__d(
  "AdsUEditorAdgroupSetNameReducerPlugin",
  [
    "AdsUEditorAdgroupMutationUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetNameDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsUEditorAdgroupMutationUtils").setNameForEach(
              e,
              t.adgroupIDs,
              t.name,
            );
          },
          o("AdsUEditorAdgroupSetNameDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
