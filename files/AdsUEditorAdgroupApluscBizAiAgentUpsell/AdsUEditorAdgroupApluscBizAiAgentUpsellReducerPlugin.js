__d(
  "AdsUEditorAdgroupApluscBizAiAgentUpsellReducerPlugin",
  [
    "AdsCreativeFeaturesPlatformMutators",
    "AdsCreativeOptimizationToolChangeSetRecord",
    "AdsMutators",
    "AdsUEditorAdgroupApluscBizAiAgentUpsellActionFlux",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = new (r("AdsCreativeOptimizationToolChangeSetRecord"))({
                  biz_ai: { enroll_status: "OPT_IN" },
                }),
                n = o(
                  "AdsCreativeFeaturesPlatformMutators",
                ).mutateAdgroupForBizAI(e, t, "MANUAL");
              return n;
            });
          },
          r("AdsUEditorAdgroupApluscBizAiAgentUpsellActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
