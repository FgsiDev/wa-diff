__d(
  "AdsUEditorAdgroupRemoveCreativeAssetGroupMessageAtIndexReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveCreativeAssetGroupMessageAtIndexDataActionFlux",
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
                ).removeTextSpecWithTypeAtIndex(
                  e,
                  t.selectedGroupIndex,
                  t.assetIndex,
                  "primary_text",
                  r("nullthrows")(a.get(n)),
                );
              },
            );
          },
          r(
            "AdsUEditorAdgroupRemoveCreativeAssetGroupMessageAtIndexDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
