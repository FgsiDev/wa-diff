__d(
  "AdsUEditorAdgroupDynamicAdsImageMediaReducerPlugin",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsAdgroupMultiProductMutatorUtils",
    "AdsEditingAdgroupEditorContext",
    "AdsFormatTransformationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupDynamicAdsImageMediaDataActionFlux",
    "AdsUEditorAdgroupDynamicAdsTextMutator",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "DAFlexibleFormatUtils",
    "adsUEditorReactiveControlStickySettingSelector",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var a,
                  i = e;
                (o("DAFlexibleFormatUtils").shouldAddLeadingStaticCard(e) &&
                  ((i = o(
                    "AdsUEditorAdgroupChildAttachmentsMutators",
                  ).addLeadingStaticCard(e, !1)),
                  (i = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                    i,
                    "carousel",
                    "catalog",
                  ))),
                  t.shouldPopulateMediaDetails === !0 &&
                    (i = o(
                      "AdsUEditorAdgroupDynamicAdsTextMutator",
                    ).mutateChildMediaDetails(
                      t.index,
                      i,
                      t.headlineValue,
                      t.descriptionValue,
                      t.urlValue,
                    )),
                  (i = o(
                    "AdsAdgroupMultiProductMutatorUtils",
                  ).setChildImageAndCrops(
                    t.index,
                    t.childImageCrops,
                    t.childImageHash,
                    t.childImageURL,
                    i,
                    t.childThumbnailURL,
                    t.childThumbnailHeight,
                    t.childThumbnailWidth,
                  )),
                  (i = o(
                    "AdsUEditorAdgroupMediaSourcingSpecMutators",
                  ).maybeRemoveInferredDAIntroCardStatus(i)));
                var l = r("adsUEditorReactiveControlStickySettingSelector")(
                    r("AdsEditingAdgroupEditorContext"),
                  ),
                  s =
                    !o(
                      "DAFlexibleFormatUtils",
                    ).isUserEligibleForDAFormatControlDefaultOn(
                      l,
                      "da_collection",
                      "catalog",
                    ) ||
                    !o(
                      "DAFlexibleFormatUtils",
                    ).isUserEligibleForDAFormatControlDefaultOn(
                      l,
                      "da_collection",
                      "manual_uploads",
                    );
                return (
                  s &&
                  !((a = r("qex")._("5195")) != null && a) &&
                  r("gkx")("20755") !== !0
                    ? o(
                        "AdsFormatTransformationUtils",
                      ).hasFormatTransformationWithDataSource(
                        i,
                        "da_collection",
                        "manual_uploads",
                      ) &&
                      (i = o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                        i,
                        "da_collection",
                        "manual_uploads",
                      ))
                    : (o(
                        "DAFlexibleFormatUtils",
                      ).shouldApplyCollectionWithUploadedMediaDefaultOn(
                        i,
                        l,
                        "da_collection",
                        "manual_uploads",
                      ) ||
                        o(
                          "AdsFormatTransformationUtils",
                        ).hasFormatTransformationWithDataSource(
                          i,
                          "da_collection",
                          "catalog",
                        )) &&
                      (i = o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                        i,
                        "da_collection",
                        "manual_uploads",
                      )),
                  (o(
                    "DAFlexibleFormatUtils",
                  ).shouldApplyCollectionWithUploadedMediaDefaultOn(
                    i,
                    l,
                    "single_media",
                    "manual_uploads",
                  ) ||
                    o(
                      "AdsFormatTransformationUtils",
                    ).hasFormatTransformationWithDataSource(
                      i,
                      "single_media",
                      "related_media",
                    )) &&
                    (i = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                      i,
                      "single_media",
                      "manual_uploads",
                    )),
                  i
                );
              },
            );
          },
          o("AdsUEditorAdgroupDynamicAdsImageMediaDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
