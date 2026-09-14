__d(
  "AdsUEditorAdgroupSetImageCropsAtIndexReducerPlugin",
  [
    "AdImageSpecCropKeys",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetImageCropsAtIndexDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "immutable",
    "nullthrows",
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
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("nullthrows")(a.get(e.id)),
                i = t.crops,
                l = Object.keys(i);
              return l.length === 0 ||
                (l.length === 1 && i[r("AdImageSpecCropKeys").NO_CROP])
                ? o(
                    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
                  ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
                    e,
                    "images",
                    t.assetIndex,
                    "image_crops",
                  )
                : o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    e,
                    n,
                    r("AdsUnifiedCreativeAPIFields").imageHash,
                    t.assetIndex,
                    "image_crops",
                    r("immutable").fromJS(i),
                  );
            });
          },
          o("AdsUEditorAdgroupSetImageCropsAtIndexDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
