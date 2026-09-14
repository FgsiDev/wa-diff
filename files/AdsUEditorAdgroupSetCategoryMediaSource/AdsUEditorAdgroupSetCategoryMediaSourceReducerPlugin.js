__d(
  "AdsUEditorAdgroupSetCategoryMediaSourceReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCategoryMediaSourceDataActionFlux",
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
              ).creative.category_media_source.set(t.categoryMediaSource, e);
            });
          },
          o("AdsUEditorAdgroupSetCategoryMediaSourceDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
