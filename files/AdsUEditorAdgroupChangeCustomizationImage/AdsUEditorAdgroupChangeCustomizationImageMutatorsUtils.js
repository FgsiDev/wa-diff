__d(
  "AdsUEditorAdgroupChangeCustomizationImageMutatorsUtils",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsDCOImageCropDoFUtils",
    "AdsUEditorAdgroupImageMutators",
    "FBLogger",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i = o(
        "adsAssetFeedSpecRemoveAssetFieldAtIndex",
      ).adsAssetFeedSpecRemoveAssetFieldAtIndex(e, "images", n, "image_crops");
      return o("AdsAssetFeedMutationUtils").setImageAssetAtIndex(i, t, n, r, a);
    }
    function s(t) {
      var n,
        a = t.account,
        i = t.adgroup,
        l = t.assetFeedLabel,
        s = t.hash,
        u = t.page,
        c = t.specPathPlugin,
        d = t.url;
      if (!o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(i)) {
        var m = o("AdsUEditorAdgroupImageMutators").setImage(
            a,
            s,
            d,
            null,
            null,
            null,
            null,
            i,
            c,
            u,
          ),
          p = o("AdsDCOImageCropDoFUtils").hasDoFSpecWithFAMToggleExpType(i);
        return (
          p &&
            (m = r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.delete(m)),
          m
        );
      }
      var _ = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
        (n = i.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.images,
        l,
        "hash",
      ).index;
      if (_ == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "asset with given label must exist in asset feed",
        );
      var f,
        g = o("AdsUEditorAdgroupImageMutators").isolateImageAssetWithLabel(
          i,
          c,
          _,
          l,
        ),
        h = g.adgroupWithIsolatedImageAsset,
        y = g.isolatedImageAssetIndex;
      return (
        (f = e(h, c, y, s, d)),
        (f = o("AdsUEditorAdgroupImageMutators").removeDuplicateImageAssets(
          f,
          c,
        )),
        (f = o("AdsUEditorAdgroupImageMutators").setImageThumbnail(
          null,
          null,
          null,
          f,
        )),
        f
      );
    }
    l.setCustomizationImage = s;
  },
  98,
);
