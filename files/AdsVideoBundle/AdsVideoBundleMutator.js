__d(
  "AdsVideoBundleMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsVideoBundleRecommendationUtils",
    "ODS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, r) {
      var a,
        i =
          (a = t.creative) == null || (a = a.degrees_of_freedom_spec) == null
            ? void 0
            : a.creative_features_spec;
      if (i == null)
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            5648,
            "Creative_GenAI.VideoBundleRecommendation",
            "Mutator.no_creative_features_spec",
          ),
          t
        );
      var l = o("AdsVideoBundleRecommendationUtils").VIDEO_BUNDLE_FEATURES.some(
        function (e) {
          return u(i, e) === "OPT_IN";
        },
      );
      if (!l)
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            5648,
            "Creative_GenAI.VideoBundleRecommendation",
            "Mutator.no_opted_in",
          ),
          t
        );
      var s = t;
      for (var d of o("AdsVideoBundleRecommendationUtils")
        .VIDEO_BUNDLE_FEATURES) {
        var m = o(
          "AdsVideoBundleRecommendationUtils",
        ).getBundleRecommendationDecision(d, s, n, r);
        (m === "bundle" && (s = c(s, d)),
          (e || (e = o("ODS"))).bumpEntityKey(
            5648,
            "Creative_GenAI.VideoBundleRecommendation",
            m === "bundle"
              ? "Mutator.bundle_recommend." + d
              : "Mutator." + m + "." + d,
          ));
      }
      return s;
    }
    function u(e, t) {
      var n, r, o;
      return e == null
        ? null
        : t === "video_filtering"
          ? (n = e.video_filtering) == null
            ? void 0
            : n.enroll_status
          : t === "video_uncrop"
            ? (r = e.video_uncrop) == null
              ? void 0
              : r.enroll_status
            : t === "video_auto_crop"
              ? (o = e.video_auto_crop) == null
                ? void 0
                : o.enroll_status
              : null;
    }
    function c(e, t) {
      return t === "video_filtering"
        ? o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.video_filtering.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.video_filtering.action_metadata.type.set(
              "BUNDLE_RECOMMENDATION",
            ),
          )(e)
        : t === "video_uncrop"
          ? o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.video_uncrop.enroll_status.set(
                "OPT_IN",
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.video_uncrop.action_metadata.type.set(
                "BUNDLE_RECOMMENDATION",
              ),
            )(e)
          : t === "video_auto_crop"
            ? o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.video_auto_crop.enroll_status.set(
                  "OPT_IN",
                ),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.degrees_of_freedom_spec.creative_features_spec.video_auto_crop.action_metadata.type.set(
                  "BUNDLE_RECOMMENDATION",
                ),
              )(e)
            : e;
    }
    l.default = s;
  },
  98,
);
