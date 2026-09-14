__d(
  "AdsUEditorAdgroupSetCustomizationImageCropsReducerPlugin",
  [
    "AdImageSpecCropKeys",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCustomizationImageCropsDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupStoriesVariationMutators",
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
          return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
            var n,
              i = r("nullthrows")(a.get(e.id)),
              l = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                (n = e.creative) == null || (n = n.asset_feed_spec) == null
                  ? void 0
                  : n.images,
                t.label,
                "hash",
              ).index;
            if (l == null)
              throw r("FBLogger")("am_feature_pac").mustfixThrow(
                "asset with given label must exist in asset feed",
              );
            var u,
              c = o(
                "AdsUEditorAdgroupImageMutators",
              ).isolateImageAssetWithLabel(e, i, l, t.label),
              d = c.adgroupWithIsolatedImageAsset,
              m = c.isolatedImageAssetIndex;
            return (
              (u = s(d, i, m, t.crops)),
              (u = o(
                "AdsUEditorAdgroupImageMutators",
              ).removeDuplicateImageAssets(u, i)),
              t.removeStorySmartCropTransformation === !0 &&
                (u = o(
                  "AdsUEditorAdgroupStoriesVariationMutators",
                ).removeStoriesOptimizationFields(
                  u,
                  r("immutable").List(["SMART_CROP"]),
                )),
              u
            );
          });
        },
        o("AdsUEditorAdgroupSetCustomizationImageCropsDataActionFlux")
          .actionType,
      ),
    };
    function s(e, t, n, a) {
      var i = Object.keys(a);
      return i.length === 0 ||
        (i.length === 1 && a[r("AdImageSpecCropKeys").NO_CROP])
        ? o(
            "adsAssetFeedSpecRemoveAssetFieldAtIndex",
          ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
            e,
            "images",
            n,
            "image_crops",
          )
        : o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").imageHash,
            n,
            "image_crops",
            r("immutable").fromJS(a),
          );
    }
    var u = e;
    l.default = u;
  },
  98,
);
