__d(
  "AdsUEditorAdgroupSetCatalogAssetFormatOptionReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsDynamicAdsUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupCachedUIStore",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCatalogAssetFormatOptionDataActionFlux",
    "adsStoreToSelector",
    "adsUEditorAccountSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            cachedStoreState: r("adsStoreToSelector")(
              r("AdsUEditorAdgroupCachedUIStore"),
            ),
          },
          function (e, t, n) {
            var a = n.cachedStoreState,
              i = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r("nullthrows")(i.get(n)),
                  s = l.specPlugin,
                  u = o(
                    "AdsUEditorAdgroupCachedUtils",
                  ).getCachedAdditionalImageIndex(a, n);
                if (t.formatOption === "single_image")
                  return o("AdsMutators").chain(
                    r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.template_data.force_single_link.set(
                      !0,
                    ),
                    r("AdsAdgroupRecordAccessors").creative.object_story_spec
                      .template_data.format_option.delete,
                  )(e);
                var c = e;
                return (
                  t.formatOption === "single_video" &&
                    (c = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.template_data.force_single_link.delete(
                      c,
                    )),
                  o("AdsDynamicAdsUtils").formatOptionSupportsOverlays(
                    t.formatOption,
                  ) ||
                    (c = o("AdsMutators").chain(
                      r("AdsAdgroupRecordAccessors").creative.object_story_spec
                        .template_data.image_overlay_spec.delete,
                      r("AdsAdgroupRecordAccessors").creative.object_story_spec
                        .template_data.image_layer_specs.delete,
                    )(c)),
                  (c = r(
                    "AdsAdgroupSemanticFields",
                  ).catalogAssetFormatOption.set(s, c, t.formatOption)),
                  t.formatOption === "carousel_slideshows" &&
                    (c = r(
                      "AdsAdgroupSemanticFields",
                    ).additionalImageIndex.delete(s, c)),
                  t.formatOption === "carousel_images_multi_items" &&
                    (c = r("AdsAdgroupSemanticFields").additionalImageIndex.set(
                      s,
                      c,
                      u,
                    )),
                  t.formatOption !== "carousel_images_multi_items" &&
                    (c = r(
                      "AdsAdgroupRecordAccessors",
                    ).creative.object_story_spec.template_data.automated_product_tags.delete(
                      c,
                    )),
                  c
                );
              },
            );
          },
          [
            o("AdsUEditorAdgroupSetCatalogAssetFormatOptionDataActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
