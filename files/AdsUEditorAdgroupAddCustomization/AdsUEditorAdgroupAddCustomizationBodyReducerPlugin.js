__d(
  "AdsUEditorAdgroupAddCustomizationBodyReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddCustomizationBodyActionFlux",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "adsUEditorAccountSelector",
    "nullthrows",
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
              var n = r("nullthrows")(i.get(e.id)),
                l = n.specPlugin,
                s = r(
                  "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
                )(e, l, a);
              return o(
                "AdsUEditorAdgroupBodyMutators",
              ).addPlacementCustomizationBody(
                s,
                l,
                t.placements,
                t.messages,
                t.isDefaultPlacementAsset,
              );
            });
          },
          o("AdsUEditorAdgroupAddCustomizationBodyActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
