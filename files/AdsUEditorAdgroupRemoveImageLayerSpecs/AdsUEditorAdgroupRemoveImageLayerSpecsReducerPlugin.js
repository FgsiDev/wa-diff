__d(
  "AdsUEditorAdgroupRemoveImageLayerSpecsReducerPlugin",
  [
    "AdsAPIAdgroupPaths",
    "AdsDAAddTextOverlaySpecMutators",
    "AdsDynamicOverlayUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveImageLayerSpecsActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t,
                n =
                  (t = e.creative) == null ||
                  (t = t.object_story_spec) == null ||
                  (t = t.template_data) == null
                    ? void 0
                    : t.image_layer_specs,
                a = e
                  .deleteIn(
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                      .TEMPLATE_DATA.AUTOMATED_PRODUCT_TAGS,
                  )
                  .deleteIn(
                    r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                      .TEMPLATE_DATA.IMAGE_OVERLAY_SPEC.path,
                  ),
                i = o(
                  "AdsDynamicOverlayUtils",
                ).deleteImageSpecLayersExceptTextOverlay(n);
              return (
                i != null
                  ? (a = a.setIn(
                      r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
                        .TEMPLATE_DATA.IMAGE_LAYER_SPECS,
                      i,
                    ))
                  : (a = o(
                      "AdsDAAddTextOverlaySpecMutators",
                    ).removeImageLayerSpecMutator(a)),
                a
              );
            });
          },
          o("AdsUEditorAdgroupRemoveImageLayerSpecsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
