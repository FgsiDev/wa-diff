__d(
  "AdsUEditorAdgroupAddCustomizationHeadlineReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddCustomizationHeadlineActionFlux",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "FBLogger",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "adsUEditorAccountSelector",
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
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = i.get(e.id);
              n ||
                r("FBLogger")("am_feature_pac").mustfix(
                  "[PAC] ParentData not be null when AdsUEditorAdgroupAddCustomizationHeadlineReducerPlugin",
                );
              var l = r(
                "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
              )(e, n.specPlugin, a);
              return o(
                "AdsUEditorAdgroupHeadlineMutators",
              ).addPlacementCustomizationHeadline(
                l,
                n.specPlugin,
                t.placements,
                t.headlines,
                t.isDefaultPlacementAsset,
              );
            });
          },
          o("AdsUEditorAdgroupAddCustomizationHeadlineActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
