__d(
  "AdsSAIPShouldTransformCatalogOptionsFromProductToMultipleProducts",
  ["AdsAdgroupRecordAccessors", "AdsEmptyValue", "AdsMixedValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.categorization_criteria.get(e),
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.format_option.get(e);
      return !(
        t instanceof r("AdsMixedValue") ||
        n instanceof r("AdsMixedValue") ||
        t instanceof r("AdsEmptyValue") ||
        t == null
      );
    }
    l.shouldTransformCatalogOptionsFromProductToMultipleProducts = e;
  },
  98,
);
