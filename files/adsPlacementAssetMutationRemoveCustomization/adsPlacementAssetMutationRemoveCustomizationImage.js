__d(
  "adsPlacementAssetMutationRemoveCustomizationImage",
  [
    "AdsAssetFeedFieldUtils",
    "AdsPACSpecMutationAsyncLog",
    "AdsUEditorAdgroupImageMutators",
    "FBLogger",
    "adsPlacementAssetMutationRemoveCustomizationAsset",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s) {
      var u;
      (i === void 0 && (i = !0),
        l === void 0 && (l = !1),
        l &&
          o("AdsPACSpecMutationAsyncLog").log(e, "REMOVE_IMAGE_START_DOF", a));
      var c = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
        (u = e.creative) == null || (u = u.asset_feed_spec) == null
          ? void 0
          : u.images,
        n,
        "hash",
      ).index;
      if (c == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "asset with given label must exist in asset feed",
        );
      var d = o("AdsUEditorAdgroupImageMutators").isolateImageAssetWithLabel(
          e,
          t,
          c,
          n,
        ),
        m = d.adgroupWithIsolatedImageAsset,
        p = r("adsPlacementAssetMutationRemoveCustomizationAsset")(
          m,
          t,
          n,
          "image",
          i,
          l,
          s,
        );
      return p;
    }
    l.default = e;
  },
  98,
);
