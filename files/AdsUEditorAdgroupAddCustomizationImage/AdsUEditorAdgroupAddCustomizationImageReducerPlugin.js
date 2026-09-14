__d(
  "AdsUEditorAdgroupAddCustomizationImageReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedUtils",
    "AdsDCOImageCropDoFUtils",
    "AdsMutators",
    "AdsPlacementAssetUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddCustomizationImageDataActionFlux",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "adsPlacementAssetMutationCopyDefaultCustomizations",
    "adsUEditorAccountSelector",
    "nullthrows",
    "vulture",
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
          },
          function (e, t, n) {
            var a = n.account,
              i = n.parentData;
            return (
              r("vulture")("Wqy6jD2rtCJ_XwkoT2_i86MjEX0="),
              o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                r("vulture")("WteGLgV62liwPu7ID6c2CAUOQ1U=");
                var n = r("nullthrows")(i.get(e.id)),
                  l = n.campaign,
                  s = n.specPlugin,
                  u = o(
                    "AdsUEditorAdgroupImageMutators",
                  ).addPlacementCustomizationImage({
                    adgroup: e,
                    sourceReducer: "ADD_CUSTOMIZATION_IMAGE",
                    campaign: l,
                    specPlugin: s,
                    adAccount: a,
                    assetGroup: t.assetGroup,
                    validAssetGroupsByAsset: t.validAssetGroupsByAsset,
                    imageHash: t.imageHash,
                    imageURL: t.imageURL,
                    backgroundColor: t.backgroundColor,
                    crops: t.crops,
                    placementList: t.placementList,
                    isUsingPlacementEditor: !0,
                  }),
                  c = o(
                    "AdsDCOImageCropDoFUtils",
                  ).hasDoFSpecWithFAMToggleExpType(e);
                c &&
                  (u = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.delete(u));
                var d = t.validAssetGroupsByAsset
                    ? o(
                        "AdsPlacementAssetUtils",
                      ).getAssetLabelIfSingleValidAssetGroup(
                        t.assetGroup,
                        t.validAssetGroupsByAsset,
                      )
                    : null,
                  m = d == null,
                  p =
                    o(
                      "AdsAssetFeedUtils",
                    ).isLocalizedPlacementsAdgroupFromRecord(u);
                return m && !p
                  ? r("adsPlacementAssetMutationCopyDefaultCustomizations")(
                      a,
                      u,
                      s,
                      t.placementList,
                    )
                  : u;
              })
            );
          },
          o("AdsUEditorAdgroupAddCustomizationImageDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
