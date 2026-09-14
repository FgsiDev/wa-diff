__d(
  "AdsUEditorAdgroupSetViewTagsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetViewTagsDataActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.viewTags
                ? r("AdsAdgroupRecordAccessors").view_tags.set(
                    r("immutable").fromJS(t.viewTags),
                    e,
                  )
                : r("AdsAdgroupRecordAccessors").view_tags.delete(e);
            });
          },
          o("AdsUEditorAdgroupSetViewTagsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
