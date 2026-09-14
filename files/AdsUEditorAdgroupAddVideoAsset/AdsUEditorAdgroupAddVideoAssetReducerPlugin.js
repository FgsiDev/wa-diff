__d(
  "AdsUEditorAdgroupAddVideoAssetReducerPlugin",
  [
    "AdsAssetFeedMutationUtils",
    "AdsCreativeEditorTemplateRenderDCOSucceededActionFlux",
    "AdsLoadState_LEGACY",
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddVideoAssetDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUnifiedCreativeAPIFields",
    "AdsVideoStore",
    "DCOFastConsts",
    "immutable",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            getVideo: r("AdsVideoStore").getSelector,
          },
          function (e, t, n) {
            var a,
              i = t.adgroupIDs,
              l = t.thumbnailURL,
              s = t.videoID,
              u = n.getVideo,
              c = n.parentData,
              d = u(s),
              m = r("immutable").Map(((a = {}), (a.video_id = s), a));
            return (
              d != null && d.loadState !== r("AdsLoadState_LEGACY").LOADING
                ? (m = m.set("thumbnail_url", d.preferredThumbnail.uri))
                : r("isTruthy")(l) && (m = m.set("thumbnail_url", l)),
              o("AdsMutators").mutateEach(e, i, function (e) {
                var t,
                  n = r("nullthrows")(c.get(e.id)),
                  a = n.specPlugin,
                  i = (
                    ((t = e.creative) == null || (t = t.asset_feed_spec) == null
                      ? void 0
                      : t.videos) || r("immutable").List()
                  )
                    .unshift(m)
                    .take(o("DCOFastConsts").ASSET_LIMITS.get("videos", 10));
                return o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
                  e,
                  a,
                  r("AdsUnifiedCreativeAPIFields").videoID,
                  i.toArray(),
                );
              })
            );
          },
          [
            o("AdsUEditorAdgroupAddVideoAssetDataActionFlux").actionType,
            r("AdsCreativeEditorTemplateRenderDCOSucceededActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
