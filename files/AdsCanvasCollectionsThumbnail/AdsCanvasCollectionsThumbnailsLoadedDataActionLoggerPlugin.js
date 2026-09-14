__d(
  "AdsCanvasCollectionsThumbnailsLoadedDataActionLoggerPlugin",
  ["AdsCanvasCollectionsConstants", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.collectionThumbnails.count() <
          o("AdsCanvasCollectionsConstants").MAX_COLLECTION_THUMBNAILS
            ? r("adsMgmtLogger")(
                "canvas_collections_ineligible_canvas_selected",
              )
            : r("adsMgmtLogger")("canvas_collections_load_canvas_success");
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
