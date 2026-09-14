__d(
  "AdsUEditorAdgroupSetACOCoverImageReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetACOCoverImageDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
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
              var n = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.videos.delete(e);
              return o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
                n,
                a.get(e.id),
                r("AdsUnifiedCreativeAPIFields").imageHash,
                t.imageAssets,
              );
            });
          },
          o("AdsUEditorAdgroupSetACOCoverImageDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
