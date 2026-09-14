__d(
  "AdsUEditorAdgroupProductTagsWithProductExtensionsMutators",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUserSettingsProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t =
          (e = r("AdsUserSettingsProvider")()) == null ||
          (e = e.getData()) == null ||
          (e = e.first()) == null
            ? void 0
            : e.getValue();
      return (t == null ? void 0 : t.product_extensions_opt_in) === "OPTED_OUT";
    }
    function s(t, n) {
      var a,
        i,
        l,
        s,
        u = (a = t.creative) == null ? void 0 : a.creative_sourcing_spec;
      if (u == null) return t;
      var c = (i = u.associated_product_set_id) != null ? i : n;
      if (c == null) return t;
      var d =
        (l = t.creative) == null ||
        (l = l.degrees_of_freedom_spec) == null ||
        (l = l.creative_features_spec) == null
          ? void 0
          : l.product_extensions;
      if (
        d == null ||
        e() ||
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "product_extensions",
        ) ||
        d.enroll_status === "OPT_IN" ||
        ((s = d.action_metadata) == null ? void 0 : s.type) === "MANUAL"
      )
        return t;
      var m = t;
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
          "OPT_IN",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
          "PRODUCT_TAG_GUIDED",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
          "OPT_IN",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
          "DEFAULT",
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.associated_product_set_id.set(c),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.catalog.enroll_status.set("OPT_IN"),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.catalog.action_metadata.type.set(
          "AWPT_MIGRATION_ENABLE_PE",
        ),
      )(m);
    }
    l.mutateAdgroupToEnableProductExtensions = s;
  },
  98,
);
