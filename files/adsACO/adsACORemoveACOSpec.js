__d(
  "adsACORemoveACOSpec",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsDPATextGenUtils",
    "AdsFlexibleFormatDAUtils",
    "AdsMutators",
    "ApiDynamicCreativeOptimizationTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o(
          "AdsAdgroupFormatTransformationMutators",
        ).adsDACollectionAssetFeedSpecOptOutMutator,
        a = r("AdsAdgroupRecordAccessors").creative.recommender_settings.delete,
        i = o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(e);
      if (t === "aPlusc" && i)
        n = function (t) {
          return t;
        };
      else if (
        t === "aPlusc" &&
        o("AdsDPATextGenUtils").isDynamicAdAndEligibleForTextGenQE(e)
      ) {
        var l,
          s = (l = e.creative) == null ? void 0 : l.asset_feed_spec,
          u = (s == null ? void 0 : s.bodies) != null && s.bodies.size > 1,
          c = s == null ? void 0 : s.optimization_type;
        u &&
          (c === r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM ||
            c === r("ApiDynamicCreativeOptimizationTypes").FORMAT_AUTOMATION) &&
          (o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(e)
            ? (n = function (t) {
                return o("AdsMutators").chain(
                  r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                    .ad_formats.delete,
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.optimization_type.set(
                    r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM,
                  ),
                )(t);
              })
            : c ===
                r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM &&
              (n = function (t) {
                return t;
              }));
      }
      if (
        t === "reactive_control" &&
        i &&
        ((a = function (t) {
          return t;
        }),
        o("AdsDPATextGenUtils").isDynamicAdAndEligibleForTextGenQE(e))
      ) {
        var d,
          m = (d = e.creative) == null ? void 0 : d.asset_feed_spec,
          p = (m == null ? void 0 : m.bodies) != null && m.bodies.size > 1,
          _ = m == null ? void 0 : m.optimization_type;
        p &&
          (_ === r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM ||
            _ === r("ApiDynamicCreativeOptimizationTypes").FORMAT_AUTOMATION) &&
          (o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(e)
            ? (n = function (t) {
                return o("AdsMutators").chain(
                  r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                    .ad_formats.delete,
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.asset_feed_spec.optimization_type.set(
                    r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM,
                  ),
                )(t);
              })
            : _ ===
                r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM &&
              (n = function (t) {
                return t;
              }));
      }
      return o("AdsMutators").chain(
        n,
        function (e) {
          return o(
            "AdsAdgroupFormatTransformationMutators",
          ).adsAdgroupFormatTransformationDAOptOutMutator(e, t);
        },
        a,
        function (e) {
          return e;
        },
      )(e);
    }
    l.default = e;
  },
  98,
);
