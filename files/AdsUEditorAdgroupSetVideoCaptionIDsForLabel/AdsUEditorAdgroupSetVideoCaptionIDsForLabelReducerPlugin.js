__d(
  "AdsUEditorAdgroupSetVideoCaptionIDsForLabelReducerPlugin",
  [
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetVideoCaptionIDsForLabelDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "immutable",
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
                var i,
                  l = t.captionIDs;
                if (!o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
                  return o("AdsUEditorAdgroupMutators").setVideoCaptionIDs(
                    e,
                    a.get(n),
                    l,
                  );
                var s = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                  (i = e.creative) == null || (i = i.asset_feed_spec) == null
                    ? void 0
                    : i.videos,
                  t.label,
                  "video_id",
                ).index;
                if (s == null)
                  throw r("FBLogger")("am_feature_pac").mustfixThrow(
                    "asset with given label must exist in asset feed",
                  );
                var u = r("nullthrows")(a.get(n)),
                  c = e;
                return (
                  l && l.length !== 0
                    ? (c = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
                        c,
                        u,
                        r("AdsUnifiedCreativeAPIFields").videoID,
                        s,
                        "caption_ids",
                        r("immutable").List(l),
                      ))
                    : (c = o(
                        "adsAssetFeedSpecRemoveAssetFieldAtIndex",
                      ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
                        c,
                        "videos",
                        s,
                        "caption_ids",
                      )),
                  c
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetVideoCaptionIDsForLabelDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
