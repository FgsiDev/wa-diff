__d(
  "AdsUEditorAdgroupSetCollectionThumbnailsReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetCollectionThumbnailsDataActionFlux",
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
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var o = e;
                return (
                  r(
                    "AdsAdgroupSemanticFields",
                  ).collectionThumbnails.isSupported(
                    r("nullthrows")(a.get(n)),
                    e,
                  ) &&
                    (o = r("AdsAdgroupSemanticFields").collectionThumbnails.set(
                      r("nullthrows")(a.get(e.id)),
                      e,
                      t.collectionThumbnails,
                    )),
                  o
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetCollectionThumbnailsDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
