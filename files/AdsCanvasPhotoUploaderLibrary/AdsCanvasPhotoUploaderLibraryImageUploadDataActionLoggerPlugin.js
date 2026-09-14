__d(
  "AdsCanvasPhotoUploaderLibraryImageUploadDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "canvas_builder_photo_library_uploader_image_upload",
            { canvas_template_id: t.templateID },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
