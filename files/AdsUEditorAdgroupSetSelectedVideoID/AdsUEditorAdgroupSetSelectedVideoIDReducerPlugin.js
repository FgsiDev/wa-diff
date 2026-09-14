__d(
  "AdsUEditorAdgroupSetSelectedVideoIDReducerPlugin",
  [
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectedVideoIDMutator",
    "AdsUEditorAdgroupSetSelectedVideoIDDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o(
              "AdsUEditorAdgroupSelectedVideoIDMutator",
            ).stampSelectedVideoID(e, t.adgroupIDs, t.videoID);
          },
          o("AdsUEditorAdgroupSetSelectedVideoIDDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
