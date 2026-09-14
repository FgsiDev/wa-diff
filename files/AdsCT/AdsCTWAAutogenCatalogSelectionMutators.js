__d(
  "AdsCTWAAutogenCatalogSelectionMutators",
  [
    "AdsAdgroupRecordAccessors",
    "AdsExistingPostCTAUtils",
    "AdsMutators",
    "ClickToWhatsAppFeatureGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.product_data.delete,
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.product_data
          .delete,
      )(e);
    }
    function s(t) {
      return o("AdsMutators").chain(
        e,
        r("AdsAdgroupRecordAccessors").creative.creative_sourcing_spec
          .associated_product_set_id.delete,
        r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.product_extensions.delete,
      )(t);
    }
    function u(e, t, n, a) {
      var i,
        l,
        s,
        u,
        c,
        d,
        m =
          (i = e.creative) == null ||
          (i = i.degrees_of_freedom_spec) == null ||
          (i = i.creative_features_spec) == null
            ? void 0
            : i.product_extensions,
        p = (l = e.creative) == null ? void 0 : l.object_story_id,
        _ =
          (p == null
            ? null
            : (s = o("AdsExistingPostCTAUtils").maybeGetPostIDFromObjectStoryID(
                  p,
                )) != null
              ? s
              : p) ===
          ((u = o("AdsExistingPostCTAUtils").maybeGetPostIDFromObjectStoryID(
            a,
          )) != null
            ? u
            : a),
        f =
          (m == null ? void 0 : m.enroll_status) === "OPT_IN" ||
          ((m == null ? void 0 : m.enroll_status) === "OPT_OUT" && _);
      return !n ||
        !f ||
        ((c = t.creative) == null ||
        (c = c.degrees_of_freedom_spec) == null ||
        (c = c.creative_features_spec) == null
          ? void 0
          : c.product_extensions) != null ||
        ((d = t.creative) == null ||
        (d = d.degrees_of_freedom_spec) == null ||
        (d = d.creative_features_spec) == null
          ? void 0
          : d.standard_enhancements) == null
        ? t
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.set(
            m,
            t,
          );
    }
    function c(e, t, n) {
      return (
        t !== n &&
        o("ClickToWhatsAppFeatureGating").isCTWAAutogenCatalogTreatmentEnabled(
          e,
        )
      );
    }
    function d(e, t, n, r) {
      return c(t, n, r) ? s(e) : e;
    }
    function m(e, t) {
      return (
        e !== t &&
        (o("ClickToWhatsAppFeatureGating").isCTWAAutogenCatalogTreatmentEnabled(
          e,
        ) ||
          o(
            "ClickToWhatsAppFeatureGating",
          ).isCTWAAutogenCatalogTreatmentEnabled(t))
      );
    }
    ((l.clearCTWAAutogenCatalogProductData = e),
      (l.clearCTWAAutogenCatalogSelection = s),
      (l.maybeRestoreCTWAAutogenProductExtensionsAfterDoFReset = u),
      (l.shouldClearCTWAAutogenCatalogSelectionForPageChange = c),
      (l.maybeClearCTWAAutogenCatalogSelectionForPageChange = d),
      (l.shouldClearCTWAAutogenCatalogSelectionForDestinationChange = m));
  },
  98,
);
