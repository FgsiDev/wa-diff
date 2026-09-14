__d(
  "AdsDAAplusCInfoLabelDefaultOnMutator",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "adsUEditorIsEligibleForDAInfoLabelDefaultOnSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r(
        "adsUEditorIsEligibleForDAInfoLabelDefaultOnSelector",
      )().getValue();
      return t === !0 &&
        !o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "product_metadata_automation",
        )
        ? o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_metadata_automation.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_metadata_automation.action_metadata.type.set(
              "DEFAULT",
            ),
          )(e)
        : e;
    }
    l.adsDAAplusCInfoLabelDefaultOnMutator = e;
  },
  98,
);
