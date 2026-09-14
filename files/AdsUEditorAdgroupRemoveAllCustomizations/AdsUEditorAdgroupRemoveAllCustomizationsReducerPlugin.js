__d(
  "AdsUEditorAdgroupRemoveAllCustomizationsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSetMediaReducerUtils",
    "AdsCreativeFeaturesPlatformMutators",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveAllCustomizationsDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMediaOptimizationMutator",
    "AdsUEditorRestoreOmnichannelAppDataMutator",
    "AdsVideoTrimmingGating",
    "PERelevanceUtils",
    "adsUEditorAccountSelector",
    "adsUEditorCTMCatalogProductMutatorUtils",
    "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            getPage: r("AdsPageStore").getSelector,
            getShouldEnableMusicByDefault: r(
              "adsUEditorGetShouldEnableMusicOnReelsInSingleImageByDefaultGetValueSelector",
            ),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.getPage,
              l = n.getShouldEnableMusicByDefault,
              s = n.parentData;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                var n = l().singleImage.shouldOptIn,
                  u = e;
                ((u = o(
                  "AdsCreativeFeaturesPlatformMutators",
                ).maybeDeleteDOFCFPSpec(u, n)),
                  (u = o(
                    "adsUEditorCTMCatalogProductMutatorUtils",
                  ).mayBeDeleteProductDataFromAdgroupAndParentData(
                    r("gkx")("4221") ? u : e,
                    t,
                    s,
                  )),
                  (u =
                    o(
                      "PERelevanceUtils",
                    ).mayBeDeleteAdExtensionsRelevancySpecFromAdgroup(u)),
                  (u = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.creative_sourcing_spec.associated_product_set_id.delete(
                    u,
                  )),
                  (u = o(
                    "AdsAdgroupSetMediaReducerUtils",
                  ).getAdsRemoveAllCustomizationsMutator(
                    a,
                    t,
                    i,
                    s,
                    n,
                  )(u)),
                  o(
                    "AdsVideoTrimmingGating",
                  ).isVideoTrimmingEnabledForAdAccount(!0) &&
                    (u = o(
                      "AdsUEditorAdgroupSetMediaOptimizationMutator",
                    ).pruneVideoOptimizationEntries(u, null)));
                var c = s.get(t);
                return (
                  (u = o(
                    "AdsUEditorRestoreOmnichannelAppDataMutator",
                  ).maybeRestoreOmnichannelAppDataFromCampaign(
                    u,
                    c == null ? void 0 : c.campaign,
                    c == null ? void 0 : c.specPlugin,
                  )),
                  u
                );
              },
            );
          },
          [
            o("AdsUEditorAdgroupRemoveAllCustomizationsDataActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
