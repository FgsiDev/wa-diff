__d(
  "AdsUEditorAdgroupSetVideoAtIndexReducerPlugin",
  [
    "AdsAssetFeedMutationUtils",
    "AdsLoadState_LEGACY",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetVideoAtIndexDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "AdsVideoStore",
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
            getVideo: r("AdsVideoStore").getSelector,
          },
          function (e, t, n) {
            var a = n.getVideo,
              i = n.plugins,
              l = t.assetIndex,
              s = t.videoID,
              u = s ? a(s) : null;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var t = r("nullthrows")(i.get(e.id)),
                n = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                  e,
                  t,
                  r("AdsUnifiedCreativeAPIFields").videoID,
                  l,
                  "video_id",
                  s,
                );
              return u != null &&
                u.loadState !== r("AdsLoadState_LEGACY").LOADING
                ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                    n,
                    t,
                    r("AdsUnifiedCreativeAPIFields").videoThumbnailURL,
                    l,
                    "thumbnail_url",
                    u.preferredThumbnail.uri,
                  )
                : n;
            });
          },
          o("AdsUEditorAdgroupSetVideoAtIndexDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
