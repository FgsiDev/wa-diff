__d(
  "AdsAdgroupDynamicPartnerContentDefaultOnMutator",
  ["AdsAPlusCStickyOptOutUtils", "AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      if (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null ||
        (t = t.dynamic_partner_content) == null
          ? void 0
          : t.enroll_status) === "OPT_OUT" ||
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "dynamic_partner_content",
        )
      )
        return e;
      var n = o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.dynamic_partner_content.enroll_status.set(
          "OPT_IN",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.dynamic_partner_content.action_metadata.type.set(
          "DEFAULT",
        ),
      )(e);
      return n;
    }
    function s(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.dynamic_partner_content.delete,
      )(e);
    }
    ((l.AdsAddDynamicPartnerContentSpecMutator = e),
      (l.AdsDeleteDynamicPartnerContentSpecMutator = s));
  },
  98,
);
