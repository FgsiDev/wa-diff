__d(
  "AdsDAAplusCImageUncropDefaultOnMutator",
  [
    "AdsAPlusCPersonalizedRecommendationsUtils",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFeaturesUtils",
    "AdsMutators",
    "adsUEditorGetShouldEnableImageExpansionOnDynamicAdsByDefaultGetValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!o("AdsCreativeFeaturesUtils").isEligibleForDAUncropPreview(e))
        return e;
      var t = r(
          "adsUEditorGetShouldEnableImageExpansionOnDynamicAdsByDefaultGetValueSelector",
        )(),
        n = t(),
        a =
          n.shouldOptIn &&
          o(
            "AdsAPlusCPersonalizedRecommendationsUtils",
          ).passImageUncropOnDAMLRecommendationsGK() &&
          !o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
            "image_uncrop",
          ),
        i = a ? "OPT_IN" : "OPT_OUT";
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.enroll_status.set(
          i,
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop.action_metadata.type.set(
          n.optInSource,
        ),
      )(e);
    }
    l.adsDAAplusCImageUncropDefaultOnMutator = e;
  },
  98,
);
