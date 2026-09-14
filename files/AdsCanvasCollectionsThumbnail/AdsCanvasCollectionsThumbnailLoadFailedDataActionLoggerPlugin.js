__d(
  "AdsCanvasCollectionsThumbnailLoadFailedDataActionLoggerPlugin",
  ["adsFormatErrorMessage", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_collections_load_canvas_failed", {
            error_message: r("adsFormatErrorMessage")(t.error),
            error_code: t.error.code,
            error_sub_code: t.error.error_subcode,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
