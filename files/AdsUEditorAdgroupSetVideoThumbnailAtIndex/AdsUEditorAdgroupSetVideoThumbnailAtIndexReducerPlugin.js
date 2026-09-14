__d(
  "AdsUEditorAdgroupSetVideoThumbnailAtIndexReducerPlugin",
  [
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetVideoThumbnailAtIndexDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "adsIsNewVideoThumbnailDataModel",
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
              var n = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                e,
                r("nullthrows")(a.get(e.id)),
                r("AdsUnifiedCreativeAPIFields").videoThumbnailURL,
                t.assetIndex,
                "thumbnail_source",
                t.videoThumbnailSource,
              );
              return (
                r("adsIsNewVideoThumbnailDataModel")() &&
                  (n = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    n,
                    r("nullthrows")(a.get(e.id)),
                    r("AdsUnifiedCreativeAPIFields").videoThumbnailID,
                    t.assetIndex,
                    "thumbnail_id",
                    t.videoThumbnailID,
                  )),
                o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                  n,
                  r("nullthrows")(a.get(e.id)),
                  r("AdsUnifiedCreativeAPIFields").videoThumbnailURL,
                  t.assetIndex,
                  "thumbnail_url",
                  t.videoThumbnailURL,
                )
              );
            });
          },
          o("AdsUEditorAdgroupSetVideoThumbnailAtIndexDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
