__d(
  "AdsUEditorAdgroupPACRemoveAllCarouselCustomizationsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupPACRemoveAllCarouselCustomizationsActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
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
              var t = r("nullthrows")(
                a.get(e.id),
                "specPathPlugin should exist for adgroup",
              );
              return o(
                "AdsUEditorAdgroupAssetFeedMutators",
              ).removeAllMediaAssets(
                e,
                r("nullthrows")(
                  t.pivots.objective,
                  "objective should exist in pivots",
                ),
                t,
              );
            });
          },
          o("AdsUEditorAdgroupPACRemoveAllCarouselCustomizationsActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
