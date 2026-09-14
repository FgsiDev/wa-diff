__d(
  "AdsUEditorAdgroupSetCTVWebsiteURLReducerPlugin",
  [
    "AdsUEditorAdgroupCTVWebsiteURLMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCTVWebsiteURLDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsUEditorAdgroupCTVWebsiteURLMutators").setCTVWebsiteURL(
              e,
              t.adgroupIDs,
              t.ctvWebsiteURL,
            );
          },
          o("AdsUEditorAdgroupSetCTVWebsiteURLDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
