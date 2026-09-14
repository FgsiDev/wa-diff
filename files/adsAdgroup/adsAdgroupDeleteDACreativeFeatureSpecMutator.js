__d(
  "adsAdgroupDeleteDACreativeFeatureSpecMutator",
  ["AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return o("AdsMutators").chain(
        (t = r("AdsAdgroupRecordAccessors")).creative.degrees_of_freedom_spec
          .creative_features_spec.standard_enhancements_catalog.delete,
        t.creative.degrees_of_freedom_spec.creative_features_spec
          .product_metadata_automation.delete,
        t.creative.degrees_of_freedom_spec.creative_features_spec
          .image_background_gen.delete,
        t.creative.degrees_of_freedom_spec.creative_features_spec.image_uncrop
          .delete,
        t.creative.degrees_of_freedom_spec.creative_features_spec
          .dynamic_partner_content.delete,
      )(e);
    }
    l.adsAdgroupDeleteDACreativeFeatureSpecMutator = e;
  },
  98,
);
