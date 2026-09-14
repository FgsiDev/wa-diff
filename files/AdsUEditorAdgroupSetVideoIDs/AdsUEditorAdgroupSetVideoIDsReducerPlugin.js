__d(
  "AdsUEditorAdgroupSetVideoIDsReducerPlugin",
  [
    "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsDLOLanguageUtils",
    "AdsLoadState_LEGACY",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetVideoIDsDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "AdsVideoStore",
    "adsIsNewVideoThumbnailDataModel",
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
                var t = e != null ? a(e) : null,
                  n = r("immutable").Map().set("video_id", e);
                return (
                  t != null &&
                    t.loadState !== r("AdsLoadState_LEGACY").LOADING &&
                    ((n = n.set("thumbnail_url", t.preferredThumbnail.uri)),
                    (n = n.set("thumbnail_source", "generated_default")),
                    r("adsIsNewVideoThumbnailDataModel")() &&
                      (n = n.set("thumbnail_id", "0"))),
                  n
                );
              });
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                a =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n.videos,
                s = new Map();
              a &&
                (s = new Map(
                  a.map(function (e) {
                    return [e.get("video_id"), e];
                  }),
                ));
              var u = l.map(function (e) {
                  var t = e.get("video_id"),
                    n = s.get(t);
                  return n || e;
                }),
                c = o("AdsAssetFeedUtils").isAAAFromRecord(e);
              if (c) {
                var d = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(
                  e,
                );
                if (d != null)
                  return o(
                    "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
                  ).updateVideos(e, d, d, t.videoIDs);
              }
              return o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
                e,
                i.get(e.id),
                r("AdsUnifiedCreativeAPIFields").videoID,
                u,
              );
            });
          },
          o("AdsUEditorAdgroupSetVideoIDsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
