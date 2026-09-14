__d(
  "AdsUEditorAdgroupSetCreativeAssetGroupDescriptionAtIndexReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCreativeAssetGroupDescriptionAtIndexDataActionFlux",
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
                ).setTextSpecWithTypeAtIndex(
                  e,
                  t.selectedGroupIndex,
                  t.descriptionSpec,
                  t.assetIndex,
                  "description",
                  r("nullthrows")(a.get(n)),
                );
              },
            );
          },
          r(
            "AdsUEditorAdgroupSetCreativeAssetGroupDescriptionAtIndexDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
