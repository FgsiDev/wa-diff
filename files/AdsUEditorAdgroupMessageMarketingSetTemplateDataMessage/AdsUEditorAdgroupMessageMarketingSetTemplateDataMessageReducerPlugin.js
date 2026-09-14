__d(
  "AdsUEditorAdgroupMessageMarketingSetTemplateDataMessageReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetTemplateDataMessageActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.object_story_spec.template_data.message.set(
                  t.message,
                ),
              )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetTemplateDataMessageActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
