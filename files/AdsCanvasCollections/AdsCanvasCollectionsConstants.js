__d(
  "AdsCanvasCollectionsConstants",
  ["$InternalEnum", "AdsCanvasCollectionsThumbnail", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "CONFIRM_DIALOG_SELECTOR",
        "CROP_THUMBNAIL",
        "LOAD_CANVAS",
        "SELECT_CANVAS",
      ]),
      s = r("immutable").List([
        new (r("AdsCanvasCollectionsThumbnail"))({
          element_id: "",
          element_crops: {},
        }),
      ]),
      u = 4,
      c = 222;
    ((l.AdsCanvasCollectionsSetCollectionThumbnailsAction = e),
      (l.EMPTY_COLLECTION_THUMBNAILS = s),
      (l.MAX_COLLECTION_THUMBNAILS = u),
      (l.COVER_VIDEO_LENGTH = c));
  },
  98,
);
