__d(
  "AdsUEditorAdgroupRemoveAdContextReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveAdContextActionFlux",
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
              ).creative.object_story_spec.template_data.ad_context.delete(e);
            });
          },
          o("AdsUEditorAdgroupRemoveAdContextActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
