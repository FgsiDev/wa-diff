__d(
  "adsUEditorRemoveDynamicAdsSpecificCreativeFields",
  ["AdsAdgroupRecordAccessors", "AdsMutators"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("AdsMutators").chain(
          (t = r("AdsAdgroupRecordAccessors")).creative.product_set_id.delete,
          t.creative.categorization_criteria.delete,
          t.creative.category_media_source.delete,
          t.creative.template_url_spec.delete,
          t.creative.recommender_settings.delete,
        )(e);
      return n;
    }
    l.default = e;
  },
  98,
);
