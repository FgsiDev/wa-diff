__d(
  "AdsUEditorAdgroupMessageMarketingSetCreativeSpecReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetCreativeSpecActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.messageTemplate != null
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.marketing_message_spec.set(t.messageTemplate, e)
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_story_spec.page_id.set(
                    String(r("nullthrows")(t.pageID)),
                    e,
                  );
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetCreativeSpecActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
