__d(
  "AdsUEditorAdgroupSetUrlTagsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetURLTagsDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r("AdsAdgroupRecordAccessors").creative.url_tags.set(
                t.urlTags,
                e,
              );
            });
          },
          o("AdsUEditorAdgroupSetURLTagsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
