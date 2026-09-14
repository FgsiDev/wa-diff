__d(
  "AdsAdGroupLocalStoreExtensionMutators",
  [
    "AdsAPlusCLocalStoreExtensionUtils",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupLocalStoreExtensionUtils",
    "AdsAdgroupRecordAccessors",
    "AdsCreativeFeaturesUtils",
    "AdsMutators",
    "AdsUserSettingsProvider",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.local_store_extension.delete,
      )(e);
    }
    function s(t, n, r, a) {
      return o(
        "AdsAdgroupLocalStoreExtensionUtils",
      ).isEligibleForLocalStoreExtension(t, n, r)
        ? c(r, a)
        : e(r);
    }
    function u() {
      var e,
        t =
          (e = r("AdsUserSettingsProvider")()) == null ||
          (e = e.getData()) == null ||
          (e = e.first()) == null
            ? void 0
            : e.getValue();
      return (
        (t == null ? void 0 : t.aplusc_local_store_extension_opt_in_status) ===
        "OPTED_OUT"
      );
    }
    function c(t, n) {
      var a,
        i = t,
        l = o(
          "AdsCreativeFeaturesUtils",
        ).isAPlusCLocalStoreExtensionOptedInFromAdgroup(t),
        s = (a = n.is_part_of_location_structure) != null ? a : !1;
      return (
        r("isTruthy")(l) && !s
          ? (i = e(t))
          : s &&
            o(
              "AdsAPlusCLocalStoreExtensionUtils",
            ).passLocalStoreExtensionDefaultOptInGK(n.id, n, !0) &&
            !u() &&
            !o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
              "local_store_extension",
            ) &&
            (i = o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.local_store_extension.enroll_status.set(
                "OPT_IN",
              ),
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.local_store_extension.action_metadata.type.set(
                "DEFAULT",
              ),
            )(t)),
        i
      );
    }
    function d(t, n, r, a) {
      return o(
        "AdsAdgroupLocalStoreExtensionUtils",
      ).isEligibleForLocalStoreExtension(t, n, r)
        ? c(r, a)
        : e(r);
    }
    ((l.adsDeleteLocalStoreExtensionMutator = e),
      (l.onAdgroupSelectedPageSetChangedLocalStoreExtensionMutator = s),
      (l.onAdgroupLinkPostFormatChangedLocalStoreExtensionMutator = d));
  },
  98,
);
