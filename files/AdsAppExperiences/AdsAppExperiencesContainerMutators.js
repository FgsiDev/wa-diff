__d(
  "AdsAppExperiencesContainerMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFeaturesPlatformMutators",
    "AdsCreativeFeaturesUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a =
          t != null &&
          Object.keys(t).some(function (e) {
            return t[e] === !0;
          });
      if (!a) return e;
      var i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.app_experience_spec.reveal_details.data_sources.get(e),
        l =
          (n =
            i == null
              ? void 0
              : i.some(function (e) {
                  return e.get("enroll_status") === "OPT_IN";
                })) != null
            ? n
            : !1;
      return !l &&
        !o("AdsCreativeFeaturesUtils").isFeatureOptedInFromAdgroup(
          e,
          "reveal_details_over_time",
        )
        ? e
        : o("AdsCreativeFeaturesPlatformMutators").mutateAdgroupForFeature(
            e,
            { enroll_status: l ? "OPT_IN" : "OPT_OUT" },
            "reveal_details_over_time",
            "MANUAL",
          );
    }
    l.mutateAdgroupForRevealDetailsContainer = e;
  },
  98,
);
