__d(
  "adsAPlusCCarouselDescriptionAutomationSpecMutators",
  ["AdsAdgroupRecordAccessors", "AdsAutomaticFlowUtils", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.description_automation.delete(
        e,
      );
    }
    function s(e, t) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.description_automation.enroll_status.set(
          t.shouldOptIn ? "OPT_IN" : "OPT_OUT",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.description_automation.action_metadata.type.set(
          t.optInSource,
        ),
      )(e);
    }
    function u(t, n, r) {
      var a,
        i = o(
          "AdsAutomaticFlowUtils",
        ).isEligibleForAutomaticFlowLiteUseStaticCarouselTest(t, n),
        l = !!(
          (a = n.adgroup.creative) != null &&
          (a = a.degrees_of_freedom_spec) != null &&
          (a = a.creative_features_spec) != null &&
          a.description_automation
        ),
        u = n.adgroup;
      return i && !l ? s(u, r()) : !i && l ? e(u) : u;
    }
    ((l.adsDeleteCarouselDescriptionAutomationSpecMutator = e),
      (l.adsCarouselDescriptionAutomationSpecMutator = u));
  },
  98,
);
