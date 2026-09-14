__d(
  "AdsUEditorAdgroupSetACOCoverVideoReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedMutationUtils",
    "AdsLoadState_LEGACY",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetACOCoverVideoDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "AdsVideoStore",
    "immutable",
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
            getVideo: r("AdsVideoStore").getSelector,
          },
          function (e, t, n) {
            var a = n.getVideo,
              i = n.plugins,
              l = t.videoIDs.map(function (e) {
                var t = a(e),
                  n = r("immutable").Map().set("video_id", e);
                return (
                  t != null &&
                    t.loadState !== r("AdsLoadState_LEGACY").LOADING &&
                    ((n = n.set("thumbnail_url", t.preferredThumbnail.uri)),
                    (n = n.set("thumbnail_source", "generated_default"))),
                  n
                );
              });
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.images.delete(e);
              return o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
                t,
                i.get(e.id),
                r("AdsUnifiedCreativeAPIFields").videoID,
                l,
              );
            });
          },
          o("AdsUEditorAdgroupSetACOCoverVideoDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
