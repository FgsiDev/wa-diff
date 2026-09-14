__d(
  "AdsUEditorAdgroupSetBizAISpecPromptsEnrollmentReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetBizAISpecPromptsEnrollmentActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.enrollStatus ? "OPT_IN" : "OPT_OUT";
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t,
                o = e;
              return (
                (o = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.biz_ai.capabilities.prompts.enroll_status.set(n, o)),
                (o = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.biz_ai.capabilities.prompts.action_metadata.set(
                  "MANUAL",
                  o,
                )),
                ((t = e.creative) == null ||
                (t = t.degrees_of_freedom_spec) == null ||
                (t = t.creative_features_spec) == null
                  ? void 0
                  : t.biz_ai) != null &&
                  (o = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.biz_ai.enroll_status.set(
                    n,
                    o,
                  )),
                o
              );
            });
          },
          r("AdsUEditorAdgroupSetBizAISpecPromptsEnrollmentActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
