__d(
  "AdsUEditorAdgroupMessageMarketingSetPageIdReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "MessageMarketingMessengerSelectPageActionFlux",
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
              ).creative.object_story_spec.page_id.set(t.pageID, e);
            });
          },
          r("MessageMarketingMessengerSelectPageActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
