__d(
  "AdsUEditorAdgroupSetCustomizationMediaBackgroundColorReducerPlugin",
  [
    "AdsAdAssetSelectorTypes",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCustomizationMediaBackgroundColorDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupVideoMutators",
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
            var n = r("nullthrows")(a.get(e.id)),
              i,
              l = e;
            if (
              t.format ===
              o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.image
            ) {
              var c;
              if (
                ((i = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                  (c = e.creative) == null || (c = c.asset_feed_spec) == null
                    ? void 0
                    : c.images,
                  t.label,
                  "hash",
                ).index),
                i == null)
              )
                throw r("FBLogger")("am_feature_pac").mustfixThrow(
                  "asset with given label must exist in asset feed",
                );
              var d = o(
                  "AdsUEditorAdgroupImageMutators",
                ).isolateImageAssetWithLabel(e, n, i, t.label),
                m = d.adgroupWithIsolatedImageAsset,
                p = d.isolatedImageAssetIndex;
              ((l = s(m, n, p, t.backgroundColor)),
                (l = o(
                  "AdsUEditorAdgroupImageMutators",
                ).removeDuplicateImageAssets(l, n)));
            } else if (
              t.format ===
              o("AdsAdAssetSelectorTypes").AdsAssetSelectorFormat.video
            ) {
              var _;
              if (
                ((i = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                  (_ = e.creative) == null || (_ = _.asset_feed_spec) == null
                    ? void 0
                    : _.videos,
                  t.label,
                ).index),
                i == null)
              )
                throw r("FBLogger")("am_feature_pac").mustfixThrow(
                  "asset with given label must exist in asset feed",
                );
              var f = o(
                  "AdsUEditorAdgroupVideoMutators",
                ).isolateVideoAssetWithLabel(e, n, i, t.label),
                g = f.adgroupWithIsolatedVideoAsset,
                h = f.isolatedVideoAssetIndex;
              ((l = u(g, n, h, t.backgroundColor)),
                (l = o(
                  "AdsUEditorAdgroupVideoMutators",
                ).removeDuplicateVideoAssets(l, n)));
            }
            return l;
          });
        },
        o("AdsUEditorAdgroupSetCustomizationMediaBackgroundColorDataActionFlux")
          .actionType,
      ),
    };
    function s(e, t, n, a) {
      if (a != null) {
        var i,
          l,
          s = r("immutable").fromJS(
            ((l = {}),
            (l.specifications = [((i = {}), (i.background_color = a), i)]),
            l),
          );
        return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").imageHash,
          n,
          "portrait_customizations",
          s,
        );
      } else
        return o(
          "adsAssetFeedSpecRemoveAssetFieldAtIndex",
        ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
          e,
          "images",
          n,
          "portrait_customizations",
        );
    }
    function u(e, t, n, a) {
      if (a != null) {
        var i, l;
        return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").videoID,
          n,
          "portrait_customizations",
          r("immutable").fromJS(
            ((l = {}),
            (l.specifications = [((i = {}), (i.background_color = a), i)]),
            l),
          ),
        );
      } else
        return o(
          "adsAssetFeedSpecRemoveAssetFieldAtIndex",
        ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
          e,
          "videos",
          n,
          "portrait_customizations",
        );
    }
    var c = e;
    l.default = c;
  },
  98,
);
