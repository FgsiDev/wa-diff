__d(
  "AdsUEditorAdgroupSetCategorizationCriteriaReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCategorizationCriteriaDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCategorizationCriteriaUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i,
                  l = e;
                return (
                  (l = o("AdsMutators").chain(
                    (i = r(
                      "AdsAdgroupRecordAccessors",
                    )).creative.categorization_criteria.set(t.criteria),
                    i.creative.object_story_spec.template_data
                      .image_overlay_spec.delete,
                    i.creative.object_story_spec.template_data.image_layer_specs
                      .delete,
                    function (e) {
                      return r(
                        "AdsAdgroupSemanticFields",
                      ).catalogAssetFormatOption.set(
                        r("nullthrows")(a.get(n)),
                        e,
                        "carousel_images_multi_items",
                      );
                    },
                    i.creative.category_media_source.set("MIXED"),
                    i.creative.template_url_spec.delete,
                    i.creative.applink_treatment.delete,
                    i.creative.object_story_spec.template_data
                      .customization_rules_spec.delete,
                    i.creative.object_story_spec.template_data
                      .automated_product_tags.delete,
                  )(l)),
                  (l = o(
                    "AdsUEditorCategorizationCriteriaUtils",
                  ).setTokenizedHeadline(l, a, n, "{{category.name}}")),
                  (l = o(
                    "AdsUEditorCategorizationCriteriaUtils",
                  ).setTokenizedDescription(l, a, n, "")),
                  l
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetCategorizationCriteriaDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
