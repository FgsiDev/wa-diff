__d(
  "AdsUEditorAdgroupSetVoiceoverTranslationEnrollmentReducerPlugin",
  [
    "AdsCreativeFeaturesPlatformMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetVoiceoverTranslationEnrollmentActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.enrollStatus ? "OPT_IN" : "OPT_OUT";
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsCreativeFeaturesPlatformMutators",
              ).mutateAdgroupForFeature(
                e,
                { enroll_status: n },
                "translate_voiceover",
                "MANUAL",
              );
            });
          },
          r("AdsUEditorAdgroupSetVoiceoverTranslationEnrollmentActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
