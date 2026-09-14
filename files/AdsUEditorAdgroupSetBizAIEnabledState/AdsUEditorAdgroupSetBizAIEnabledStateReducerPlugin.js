__d(
  "AdsUEditorAdgroupSetBizAIEnabledStateReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetBizAIEnabledStateActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r("AdsAdgroupRecordAccessors").biz_ai_enabled_state.set(
                t.newState,
                e,
              );
            });
          },
          o("AdsUEditorAdgroupSetBizAIEnabledStateActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
