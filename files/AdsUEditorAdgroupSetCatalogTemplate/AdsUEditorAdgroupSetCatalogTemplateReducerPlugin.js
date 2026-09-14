__d(
  "AdsUEditorAdgroupSetCatalogTemplateReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCatalogTemplateActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              if (t.imageTemplateID == null)
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.product_media_metadata_spec.image_template_id.delete(
                  e,
                );
              var n = r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.product_media_metadata_spec.image_template_id.set(
                t.imageTemplateID,
                e,
              );
              return (
                (n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.creative_sourcing_spec.product_media_metadata_spec.image_layer_specs.delete(
                  n,
                )),
                n
              );
            });
          },
          o("AdsUEditorAdgroupSetCatalogTemplateActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
