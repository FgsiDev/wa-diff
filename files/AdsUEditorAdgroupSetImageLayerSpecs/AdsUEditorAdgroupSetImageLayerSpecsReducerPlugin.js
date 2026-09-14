__d(
  "AdsUEditorAdgroupSetImageLayerSpecsReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsDAAddTextOverlaySpecMutators",
    "AdsDynamicOverlayUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetImageLayerSpecsActionFlux",
    "AdsUEditorAdgroupShopAdsBundleMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
        {},
        function (e, t) {
          var n = t.layerRecordsMap,
            a = o("AdsDynamicOverlayUtils").getFrameOverlayLayer(n);
          return (
            (a == null ? void 0 : a.frame_image_hash) == null &&
              (n = n.delete("frame_overlay")),
            o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var a,
                i = e.deleteIn(
                  r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                    .TEMPLATE_DATA.IMAGE_OVERLAY_SPEC.path,
                );
              if (
                (t.isShopAdsBundleEnabledInsteadOfAwPT
                  ? (i = o(
                      "AdsUEditorAdgroupShopAdsBundleMutators",
                    ).processShopAdsBundleEditorState(
                      i,
                      t.shopAdsBundleEditorState,
                    ))
                  : (i = s(i, t.automatedProductTags)),
                t.writeToProductMediaMetadataSpec === !0)
              ) {
                if (
                  ((i = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.product_media_metadata_spec.image_template_id.delete(
                    i,
                  )),
                  o("AdsDynamicOverlayUtils").overlayHasNoCustomLayer(n))
                )
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.product_media_metadata_spec.image_layer_specs.delete(
                    i,
                  );
                var l = n.toList().toJS();
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.product_media_metadata_spec.image_layer_specs.set(
                  l,
                  i,
                );
              }
              if (o("AdsDynamicOverlayUtils").overlayHasNoCustomLayer(n))
                return i.deleteIn(
                  r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                    .TEMPLATE_DATA.IMAGE_LAYER_SPECS,
                );
              var u = n.toList(),
                c =
                  (a = e.creative) == null ||
                  (a = a.object_story_spec) == null ||
                  (a = a.template_data) == null
                    ? void 0
                    : a.image_layer_specs,
                d = o("AdsDynamicOverlayUtils").getTextOverlaySpec(c);
              return (
                (n = n.delete("text_overlay")),
                (u = n.toList()),
                d != null && (u = u.concat([d])),
                o("AdsDAAddTextOverlaySpecMutators").setImageLayerSpecMutator(
                  i,
                  u,
                )
              );
            })
          );
        },
        o("AdsUEditorAdgroupSetImageLayerSpecsActionFlux").actionType,
      ),
    };
    function s(e, t) {
      return t == null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.automated_product_tags.delete(
            e,
          )
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.automated_product_tags.set(
            t,
            e,
          );
    }
    var u = e;
    l.default = u;
  },
  98,
);
