__d(
  "AdsCanvasResetCanvasDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "canvas_inline_advanced_builder_close_unsaved_canvas_dialog",
            { canvas_template_id: t.templateID },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
