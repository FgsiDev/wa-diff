__d(
  "AdsUEditorAdgroupSetAutomatedProductTagsFlagReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetAutomatedProductTagsFlagDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.value == null
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.template_data.automated_product_tags.delete(
                    e,
                  )
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.template_data.automated_product_tags.set(
                    t.value,
                    e,
                  );
            });
          },
          o("AdsUEditorAdgroupSetAutomatedProductTagsFlagDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
