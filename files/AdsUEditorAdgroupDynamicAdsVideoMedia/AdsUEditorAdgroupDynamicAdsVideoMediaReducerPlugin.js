__d(
  "AdsUEditorAdgroupDynamicAdsVideoMediaReducerPlugin",
  [
    "AdsAdgroupFormatTransformationMutators",
    "AdsEditingAdgroupEditorContext",
    "AdsFormatTransformationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupDynamicAdsTextMutator",
    "AdsUEditorAdgroupDynamicAdsVideoMediaDataActionFlux",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "DAFlexibleFormatUtils",
    "adsUEditorReactiveControlStickySettingSelector",
    "gkx",
    "nullthrows",
    "qex",
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
                  l,
                  s = t.childVideoID;
                if (s == null) return e;
                var u = e;
                (o("DAFlexibleFormatUtils").shouldAddLeadingStaticCard(e) &&
                  ((u = o(
                    "AdsUEditorAdgroupChildAttachmentsMutators",
                  ).addLeadingStaticCard(e, !1)),
                  (u = o(
                    "AdsAdgroupFormatTransformationMutators",
                  ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                    u,
                    "carousel",
                    "catalog",
                  ))),
                  t.shouldPopulateMediaDetails === !0 &&
                    (u = o(
                      "AdsUEditorAdgroupDynamicAdsTextMutator",
                    ).mutateChildMediaDetails(
                      t.index,
                      u,
                      t.headlineValue,
                      t.descriptionValue,
                      t.urlValue,
                    )),
                  (u = o(
                    "AdsUEditorAdgroupChildAttachmentsMutators",
                  ).setChildVideoID(
                    u,
                    r("nullthrows")(a.get(n)),
                    t.index,
                    s,
                    t.childVideoObj,
                    (i = t.childVideoThumbnailURL) != null ? i : null,
                  )),
                  (u = o(
                    "AdsUEditorAdgroupMediaSourcingSpecMutators",
                  ).maybeRemoveInferredDAIntroCardStatus(u)));
                var c = r("adsUEditorReactiveControlStickySettingSelector")(
                    r("AdsEditingAdgroupEditorContext"),
                  ),
                  d =
                    !o(
                      "DAFlexibleFormatUtils",
                    ).isUserEligibleForDAFormatControlDefaultOn(
                      c,
                      "da_collection",
                      "catalog",
                    ) ||
                    !o(
                      "DAFlexibleFormatUtils",
                    ).isUserEligibleForDAFormatControlDefaultOn(
                      c,
                      "da_collection",
                      "manual_uploads",
                    );
                return (
                  d &&
                  !((l = r("qex")._("5195")) != null && l) &&
                  r("gkx")("20755") !== !0
                    ? o(
                        "AdsFormatTransformationUtils",
                      ).hasFormatTransformationWithDataSource(
                        u,
                        "da_collection",
                        "manual_uploads",
                      ) &&
                      (u = o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupFormatTransformationDataSourceOptOutMutator(
                        u,
                        "da_collection",
                        "manual_uploads",
                      ))
                    : (o(
                        "DAFlexibleFormatUtils",
                      ).shouldApplyCollectionWithUploadedMediaDefaultOn(
                        u,
                        c,
                        "da_collection",
                        "manual_uploads",
                      ) ||
                        o(
                          "AdsFormatTransformationUtils",
                        ).hasFormatTransformationWithDataSource(
                          u,
                          "da_collection",
                          "catalog",
                        )) &&
                      (u = o(
                        "AdsAdgroupFormatTransformationMutators",
                      ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                        u,
                        "da_collection",
                        "manual_uploads",
                      )),
                  (o(
                    "DAFlexibleFormatUtils",
                  ).shouldApplyCollectionWithUploadedMediaDefaultOn(
                    u,
                    c,
                    "single_media",
                    "manual_uploads",
                  ) ||
                    o(
                      "AdsFormatTransformationUtils",
                    ).hasFormatTransformationWithDataSource(
                      u,
                      "single_media",
                      "related_media",
                    )) &&
                    (u = o(
                      "AdsAdgroupFormatTransformationMutators",
                    ).adsAdgroupFormatTransformationDataSourceOptInMutator(
                      u,
                      "single_media",
                      "manual_uploads",
                    )),
                  u
                );
              },
            );
          },
          o("AdsUEditorAdgroupDynamicAdsVideoMediaDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
