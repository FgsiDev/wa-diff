__d(
  "AdsMetadataPCAUnifiedFormatAdReducerPlugin",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupRecordAccessors",
    "AdsMediaTypeAutomationMutators",
    "AdsMetadataPCAUnifiedFormatAdActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)) return e;
              var n = e;
              if (
                ((n = r(
                  "AdsAdgroupRecordAccessors",
                ).metadata.is_pca_unified_format_ad.set(
                  t.isPCAUnifiedFormatAd,
                  e,
                )),
                t.isPCAUnifiedFormatAd && t.associatedProductSetId != null)
              ) {
                var a;
                ((n = (a = r(
                  "AdsAdgroupRecordAccessors",
                )).creative.creative_sourcing_spec.associated_product_set_id.set(
                  t.associatedProductSetId,
                  n,
                )),
                  (n =
                    a.creative.creative_sourcing_spec.catalog.enroll_status.set(
                      "OPT_IN",
                      n,
                    )),
                  (n =
                    a.creative.creative_sourcing_spec.catalog.action_metadata.type.set(
                      "DEFAULT",
                      n,
                    )));
                var i =
                  a.creative.creative_sourcing_spec.product_media_metadata_spec.format_option.get(
                    n,
                  );
                i == null &&
                  (n = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.product_media_metadata_spec.format_option.set(
                    "carousel_images_multi_items",
                  )(n));
                var l = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.enroll_status.get(
                    n,
                  ),
                  s = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.customizations.video_crop_style.get(
                    n,
                  );
                ((l == null || s == null) &&
                  (n = o(
                    "AdsMediaTypeAutomationMutators",
                  ).changeMediaTypeAutomationOptinMutator(
                    n,
                    "OPT_IN",
                    "DEFAULT",
                  )),
                  (n = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                    n,
                    "carousel",
                    "catalog",
                  )));
              } else {
                var a;
                ((n = (a = r(
                  "AdsAdgroupRecordAccessors",
                )).creative.creative_sourcing_spec.associated_product_set_id.delete(
                  n,
                )),
                  (n =
                    a.creative.creative_sourcing_spec.product_media_metadata_spec.format_option.delete(
                      n,
                    )),
                  (n =
                    a.creative.creative_sourcing_spec.catalog.enroll_status.delete(
                      n,
                    )),
                  (n =
                    a.creative.creative_sourcing_spec.catalog.action_metadata.type.delete(
                      n,
                    )),
                  (n = o(
                    "AdsMediaTypeAutomationMutators",
                  ).removeMediaTypeAutomationFieldsMutator(n)));
              }
              return n;
            });
          },
          [r("AdsMetadataPCAUnifiedFormatAdActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
