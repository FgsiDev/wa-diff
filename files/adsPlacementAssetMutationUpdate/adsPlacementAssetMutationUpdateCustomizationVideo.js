__d(
  "adsPlacementAssetMutationUpdateCustomizationVideo",
  [
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupVideoMutators",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsIsNewVideoThumbnailDataModel",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u, c) {
      var d,
        m = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
          (d = e.creative) == null || (d = d.asset_feed_spec) == null
            ? void 0
            : d.videos,
          n,
          "video_id",
        ).index;
      if (m == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "asset with given label must exist in asset feed",
        );
      var p = e,
        _ = o("AdsUEditorAdgroupVideoMutators").isolateVideoAssetWithLabel(
          p,
          a,
          m,
          n,
        ),
        f = _.adgroupWithIsolatedVideoAsset,
        g = _.isolatedVideoAssetIndex;
      return (
        (p = f),
        (m = g),
        u != null &&
          (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            a,
            r("AdsUnifiedCreativeAPIFields").videoID,
            m,
            "video_id",
            u,
          )),
        i != null &&
          ((p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            a,
            r("AdsUnifiedCreativeAPIFields").videoID,
            m,
            "thumbnail_url",
            i,
          )),
          (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            a,
            r("AdsUnifiedCreativeAPIFields").videoID,
            m,
            "thumbnail_source",
            s != null ? s : "generated_default",
          )),
          t === !0 &&
            (p = o("AdsUEditorAdgroupMutators").setThumbnailURL(p, i))),
        r("isStringNullOrEmpty")(c) ||
          (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            p,
            a,
            r("AdsUnifiedCreativeAPIFields").videoID,
            m,
            "thumbnail_hash",
            c,
          )),
        r("adsIsNewVideoThumbnailDataModel")() &&
          (r("isStringNullOrEmpty")(l) ||
            (p = o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              p,
              a,
              r("AdsUnifiedCreativeAPIFields").videoID,
              m,
              "thumbnail_id",
              l,
            ))),
        o("AdsUEditorAdgroupVideoMutators").removeDuplicateVideoAssets(p, a)
      );
    }
    l.default = e;
  },
  98,
);
