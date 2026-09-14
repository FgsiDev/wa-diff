__d(
  "adsAPlusCEnhanceCTASpecMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsInstagramApplicabilityUtils",
    "AdsMutators",
    "adsUEditorGetShouldEnableEnhanceCTAByDefaultSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.enhance_cta.delete(
        e,
      );
    }
    function s(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.enhance_cta.enroll_status.set(
          t ? "OPT_IN" : "OPT_OUT",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.enhance_cta.action_metadata.type.set(
          "DEFAULT",
        ),
      )(e);
    }
    function u(t, n) {
      var o,
        a,
        i = r("AdsInstagramApplicabilityUtils").hasInstagramStoryPlacement(t),
        l = i,
        u = !!(
          (o = n.creative) != null &&
          (o = o.degrees_of_freedom_spec) != null &&
          (o = o.creative_features_spec) != null &&
          o.enhance_cta
        ),
        c =
          (a = r(
            "adsUEditorGetShouldEnableEnhanceCTAByDefaultSelector",
          )().getValue()) != null
            ? a
            : !1;
      return l && !u ? s(n, c) : !l && u ? e(n) : n;
    }
    ((l.adsDeleteEnhanceCTASpecMutator = e), (l.adsEnhanceCTASpecMutator = u));
  },
  98,
);
