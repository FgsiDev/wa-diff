__d(
  "AdsCanvasCollectionsCoverMediaLoadFailDataActionLoggerPlugin",
  ["adsFormatErrorMessage", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("collection_cover_media_load_failed", {
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
