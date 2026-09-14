__d(
  "adsAplusCBundleDoFSpecMutators",
  ["AdsAPlusCStickyOptOutUtils", "AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
        "image_templates",
      )
        ? e
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.image_templates.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.image_templates.action_metadata.type.set(
              "DUPLICATION_UPGRADE",
            ),
          )(e);
    }
    function s(e) {
      return o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
        "image_touchups",
      )
        ? e
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.image_touchups.action_metadata.type.set(
              "DUPLICATION_UPGRADE",
            ),
          )(e);
    }
    function u(e) {
      return o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
        "text_optimizations",
      )
        ? e
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.text_optimizations.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.text_optimizations.action_metadata.type.set(
              "DUPLICATION_UPGRADE",
            ),
          )(e);
    }
    function c(e) {
      return o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
        "video_auto_crop",
      )
        ? e
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.video_auto_crop.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.video_auto_crop.action_metadata.type.set(
              "DUPLICATION_UPGRADE",
            ),
          )(e);
    }
    function d(e) {
      return o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
        "pac_relaxation",
      )
        ? e
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.pac_relaxation.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.pac_relaxation.action_metadata.type.set(
              "DUPLICATION_UPGRADE",
            ),
          )(e);
    }
    function m(e) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.degrees_of_freedom_type.set(
          "USER_ENROLLED_AUTOFLOW",
        ),
      )(e);
    }
    ((l.adsAPlusCBundleMutationSetImageTemplates = e),
      (l.adsAPlusCBundleMutationSetImageTouchups = s),
      (l.adsAPlusCBundleMutationSetTextOptimizations = u),
      (l.adsAPlusCBundleMutationSetVideoAutoCrop = c),
      (l.adsAPlusCBundleMutationSetPacRelaxation = d),
      (l.adsAPlusCBundleMutationSetDegreesOfFreedomType = m));
  },
  98,
);
