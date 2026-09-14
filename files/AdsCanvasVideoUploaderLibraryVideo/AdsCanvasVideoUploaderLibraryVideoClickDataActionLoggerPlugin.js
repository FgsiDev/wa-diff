__d(
  "AdsCanvasVideoUploaderLibraryVideoClickDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "canvas_builder_video_library_uploader_video_click",
            { canvas_template_id: t.templateID },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
