__d(
  "AdsUEditorAdgroupSetBizAISpecPromotionsEnrollmentReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetBizAISpecPromotionsEnrollmentActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.enrollStatus ? "OPT_IN" : "OPT_OUT";
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = e;
              return (
                (t = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.biz_ai.capabilities.skills.enroll_status.set(n, t)),
                (t = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.biz_ai.capabilities.skills.action_metadata.set(
                  "MANUAL",
                  t,
                )),
                t
              );
            });
          },
          r("AdsUEditorAdgroupSetBizAISpecPromotionsEnrollmentActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
