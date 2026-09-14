__d(
  "AdsUEditorAdgroupSetContextualAdsMultiAdvertiserExperienceOptInReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsContextualAdsMultiAdvertiserExperienceOptInActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return (
                (n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.contextual_multi_ads.action_metadata.type.set(
                  "MANUAL",
                  n,
                )),
                t.eligibilityState.shouldRenderCheckbox !== !0
                  ? (n = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.contextual_multi_ads.delete(n))
                  : t.eligibilityState.shouldOptIn === !0
                    ? (n = r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.contextual_multi_ads.enroll_status.set(
                        "OPT_IN",
                        n,
                      ))
                    : t.eligibilityState.isExplicitOptOut === !0
                      ? (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.contextual_multi_ads.enroll_status.set(
                          "OPT_OUT",
                          n,
                        ))
                      : (n = r(
                          "AdsAdgroupRecordAccessors",
                        ).creative.contextual_multi_ads.delete(n)),
                n
              );
            });
          },
          o("AdsContextualAdsMultiAdvertiserExperienceOptInActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
