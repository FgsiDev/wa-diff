__d(
  "AdsUEditorAdgroupSetInstagramAccountReducerPlugin",
  [
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetInstagramAccountDataActionFlux",
    "AdsUEditorAdgroupSetInstagramAccountReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          o("AdsUEditorAdgroupSetInstagramAccountReducerUtils")
            .extraDataSelectors,
          o("AdsUEditorAdgroupSetInstagramAccountReducerUtils").createReducer(),
          o("AdsUEditorAdgroupSetInstagramAccountDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
