__d(
  "AdsCanvasCollectionsToggleThumbnailSelectorDialogDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "canvas_collections_toggle_thumbnail_selector_dialog",
            { new_value: t.showDialog },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
