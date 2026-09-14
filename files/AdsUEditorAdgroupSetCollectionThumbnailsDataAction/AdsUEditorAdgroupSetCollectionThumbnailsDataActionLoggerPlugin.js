__d(
  "AdsUEditorAdgroupSetCollectionThumbnailsDataActionLoggerPlugin",
  ["AdsCanvasCollectionsConstants", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.canvasCollectionAction ===
          o("AdsCanvasCollectionsConstants")
            .AdsCanvasCollectionsSetCollectionThumbnailsAction
            .CONFIRM_DIALOG_SELECTOR
            ? r("adsMgmtLogger")("canvas_collections_select_new_thumbnails")
            : t.canvasCollectionAction ===
                o("AdsCanvasCollectionsConstants")
                  .AdsCanvasCollectionsSetCollectionThumbnailsAction
                  .SELECT_CANVAS
              ? r("adsMgmtLogger")("canvas_collections_new_canvas_selected")
              : t.canvasCollectionAction ===
                  o("AdsCanvasCollectionsConstants")
                    .AdsCanvasCollectionsSetCollectionThumbnailsAction
                    .LOAD_CANVAS &&
                r("adsMgmtLogger")("canvas_collections_new_canvas_loaded");
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
