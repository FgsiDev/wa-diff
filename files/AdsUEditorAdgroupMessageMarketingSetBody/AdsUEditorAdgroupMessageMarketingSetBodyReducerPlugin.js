__d(
  "AdsUEditorAdgroupMessageMarketingSetBodyReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetBodyActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.isDynamicProductMessage
                ? o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.template_data.message.set(
                      t.body,
                    ),
                  )(e)
                : t.isUsingVideoHeader
                  ? o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.video_data.message.set(
                        t.body,
                      ),
                    )(e)
                  : o("AdsMutators").chain(
                      r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.object_story_spec.link_data.message.set(
                        t.body,
                      ),
                    )(e);
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetBodyActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
