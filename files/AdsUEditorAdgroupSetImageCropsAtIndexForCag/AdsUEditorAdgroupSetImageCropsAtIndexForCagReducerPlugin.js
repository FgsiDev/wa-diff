__d(
  "AdsUEditorAdgroupSetImageCropsAtIndexForCagReducerPlugin",
  [
    "AdImageSpecCropKeys",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetImageCropsAtIndexForCagDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
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
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = t.crops,
                  l = Object.keys(i),
                  s;
                return (
                  l.length === 0 ||
                  (l.length === 1 && i[r("AdImageSpecCropKeys").NO_CROP])
                    ? (s = null)
                    : (s = r("immutable").fromJS(i)),
                  o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setImageCropAtIndex(
                    e,
                    0,
                    t.assetIndex,
                    s,
                    r("nullthrows")(a.get(n)),
                  )
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetImageCropsAtIndexForCagDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
