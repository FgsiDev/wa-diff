__d(
  "AdsUEditorAdgroupSetMultiProductOptimizedReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMultiProductOptimizedActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsPlacementAssetMutationUpdateAllCarousels",
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
              return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                ? r("adsPlacementAssetMutationUpdateAllCarousels")(
                    e,
                    function (e) {
                      return e.set(
                        "multi_share_optimized",
                        t.multiShareOptimized,
                      );
                    },
                  )
                : r("AdsAdgroupSemanticFields").multiShareOptimized.set(
                    r("nullthrows")(a.get(e.id)),
                    e,
                    t.multiShareOptimized,
                  );
            });
          },
          o("AdsUEditorAdgroupSetMultiProductOptimizedActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
