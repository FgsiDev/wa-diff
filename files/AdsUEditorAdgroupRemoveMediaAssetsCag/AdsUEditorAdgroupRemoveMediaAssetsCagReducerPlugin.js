__d(
  "AdsUEditorAdgroupRemoveMediaAssetsCagReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveMediaAssetsCagDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
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
                return o(
                  "AdsAdgroupCreativeAssetGroupsSpecMutators",
                ).removeSpecAtIndex(
                  e,
                  t.groupIndex,
                  t.assetIndex,
                  t.specType,
                  r("nullthrows")(a.get(n)),
                );
              },
            );
          },
          o("AdsUEditorAdgroupRemoveMediaAssetsCagDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
