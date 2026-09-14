__d(
  "AdsUEditorAdgroupSaveCanvasReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsCanvasCollectionsConstants",
    "AdsCanvasCollectionsUtils",
    "AdsCanvasDocumentSaveSuccessDataActionFlux",
    "AdsMutators",
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
            var a = n.plugins,
              i = t.adgroupIDs ? t.adgroupIDs : [];
            return o("AdsMutators").mutateEach(e, i, function (e, t) {
              var n = r("nullthrows")(a.get(t));
              return o("AdsCanvasCollectionsUtils").isCanvasCollectionAd(
                e,
                n,
              ) &&
                r("AdsAdgroupSemanticFields").collectionThumbnails.isSupported(
                  n,
                  e,
                )
                ? r("AdsAdgroupSemanticFields").collectionThumbnails.set(
                    n,
                    e,
                    o("AdsCanvasCollectionsConstants")
                      .EMPTY_COLLECTION_THUMBNAILS,
                  )
                : e;
            });
          },
          o("AdsCanvasDocumentSaveSuccessDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
