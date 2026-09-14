__d(
  "adsUEditorAdgroupCampaignGroupSetPromotedCatalogMutator",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsPCAUnificationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o("AdsPCAUnificationUtils").isPcaUnificationEnabled(n)
        ? e
        : o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.product_set_id.delete,
            r("AdsAdgroupRecordAccessors").creative.object_story_spec
              .template_data.automated_product_tags.delete,
            function (e) {
              return r("AdsAdgroupSemanticFields").headline.set(t, e, "");
            },
            function (e) {
              return r("AdsAdgroupSemanticFields").linkDescription.set(
                t,
                e,
                "",
              );
            },
          )(e);
    }
    l.default = e;
  },
  98,
);
