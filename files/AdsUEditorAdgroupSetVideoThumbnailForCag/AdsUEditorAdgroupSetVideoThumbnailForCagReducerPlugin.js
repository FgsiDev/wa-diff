__d(
  "AdsUEditorAdgroupSetVideoThumbnailForCagReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetVideoThumbnailForCagDataActionFlux",
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
                ).setVideoThumbnailInfoAtIndex(
                  e,
                  t.groupIndex,
                  t.assetIndex,
                  t.videoThumbnailID,
                  t.videoThumbnailSource,
                  t.videoImageURL,
                  r("nullthrows")(a.get(n)),
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetVideoThumbnailForCagDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
