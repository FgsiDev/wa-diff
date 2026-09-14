__d(
  "AdsUEditorAdgroupSetBizAISpecPillsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetBizAISpecPillsActionFlux",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("AdsAdgroupRecordAccessors").creative.biz_ai.pills.set(
                r("immutable").fromJS(t.pills),
                e,
              );
              return (
                t.stampedMbsVersion !== void 0 &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.biz_ai.pills_mbs_version.set(
                    t.stampedMbsVersion,
                    n,
                  )),
                n
              );
            });
          },
          r("AdsUEditorAdgroupSetBizAISpecPillsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
