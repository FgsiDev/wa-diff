__d(
  "AdsUEditorAdgroupMessageMarketingSetGreetingReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupMessageMarketingSetGreetingActionFlux",
    "AdsUEditorAdgroupReducerUtils",
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
              ).creative.marketing_message_structured_spec.greeting.set(
                t.greeting,
                e,
              );
            });
          },
          r("AdsUEditorAdgroupMessageMarketingSetGreetingActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
