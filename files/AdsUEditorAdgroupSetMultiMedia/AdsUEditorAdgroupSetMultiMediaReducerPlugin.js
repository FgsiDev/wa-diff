__d(
  "AdsUEditorAdgroupSetMultiMediaReducerPlugin",
  [
    "AdsAccountSettingsIdProvider",
    "AdsAdgroupGenerativeAssetSpecMutators",
    "AdsCreativeFlexSpecCheckUtils",
    "AdsCreativeGenAISpecUtils",
    "AdsDynamicAdsUtils",
    "AdsMutators",
    "AdsSFMediaPickerDataProvider",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBizAIDefaultOptInMutator",
    "AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils",
    "AdsUEditorAdgroupCreativeFlexRelatedMediaMutators",
    "AdsUEditorAdgroupMediaSourcingSpecMutators",
    "AdsUEditorAdgroupMultiMediaSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMultiMediaActionFlux",
    "AdsVideoStore",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupBizAISectionSelector",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            userSettingsID: r("AdsAccountSettingsIdProvider").toFluxSelector(),
            account: r("adsUEditorAccountSelector"),
            bizAIEligibility: o("adsUEditorAdgroupBizAISectionSelector")
              .adsUEditorBizAIAdsSectionEligibilitySelector,
            getVideo: r("AdsVideoStore").getSelector,
            mediaPickerData: r("AdsSFMediaPickerDataProvider").toFluxSelector(),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.bizAIEligibility,
              l = n.getVideo,
              s = n.mediaPickerData,
              u = n.parentData,
              c = n.userSettingsID,
              d = t.mediaSource,
              m = t.relatedMediaMap,
              p = m != null ? Array.from(m.values()) : [],
              _ = o(
                "AdsUEditorAdgroupCreativeFlexRelatedMediaMutators",
              ).getCreativeFlexOptOutCountFromProvider(c),
              f = i != null && r("justknobx")._("4424");
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = e;
              return o("AdsMutators").chain(
                function (e) {
                  var t = e;
                  return (
                    m != null &&
                      m.size !== 0 &&
                      d === "related_media" &&
                      !o("AdsDynamicAdsUtils").isDynamicAd(e) &&
                      (t = o(
                        "AdsUEditorAdgroupCreativeFlexRelatedMediaMutators",
                      ).executeSACreativeFlex(e, m, d, c, void 0, void 0, _)),
                    t
                  );
                },
                function (e) {
                  var n;
                  return o(
                    "AdsUEditorAdgroupMultiMediaSpecMutators",
                  ).maySetMSSSpecForMultiMedia(
                    e,
                    t.croppingMultiMediaChangeSets,
                    t.selectedMultiMediaAssets,
                    d,
                    p,
                    t.trimmingMultiMediaChangeSets,
                    t.selectedBaseAsset,
                    l,
                    u,
                    e.id,
                    t.multiMediaIGVideoData,
                    t.multiMediaVariantGroupData,
                    t.userUngroupedHashes,
                    (n = t.audiencePersonaChangeSets) != null
                      ? n
                      : s.audiencePersonaChangeSets,
                    t.genAIImageHashes,
                    t.genAIAdoptionEntrypoint,
                    t.multiMediaVariantsMap,
                  );
                },
                function (e) {
                  return o(
                    "AdsUEditorAdgroupMultiMediaSpecMutators",
                  ).mayDeleteTextAndDestinationCustomizationsForPrimaryMedia(e);
                },
                function (e) {
                  return o(
                    "AdsAdgroupGenerativeAssetSpecMutators",
                  ).mayDeleteGenAIAssetSpecIfMultiMediaBaseAssetChanged(
                    n,
                    e,
                    a.account_id,
                    t.selectedBaseAsset,
                  );
                },
                function (e) {
                  return !o(
                    "AdsCreativeGenAISpecUtils",
                  ).isSameAdgroupAssetImageSelectedInMediaPicker(
                    t.selectedBaseAsset,
                    n,
                    a.account_id,
                  ) &&
                    !o(
                      "AdsCreativeGenAISpecUtils",
                    ).isSameAdgroupAssetVideoSelectedInMediaPicker(
                      t.selectedBaseAsset,
                      n,
                    ) &&
                    o(
                      "AdsCreativeFlexSpecCheckUtils",
                    ).shouldClearStaleRelatedMediaOnBaseChange(e)
                    ? o(
                        "AdsUEditorAdgroupMediaSourcingSpecMutators",
                      ).mayClearRelatedMediaSpecKeepBaseMedia(e)
                    : e;
                },
                function (e) {
                  return f
                    ? o(
                        "AdsUEditorAdgroupBizAIDefaultOptInMutator",
                      ).updateBizAIDefaultOptIn(
                        e,
                        i,
                        o("AdsUEditorAdgroupBizAIDefaultOptInMutatorUtils")
                          .BizAIDefaultOptInCallSite.MEDIA_UPDATE,
                      )
                    : e;
                },
              )(e);
            });
          },
          r("AdsUEditorAdgroupSetMultiMediaActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
