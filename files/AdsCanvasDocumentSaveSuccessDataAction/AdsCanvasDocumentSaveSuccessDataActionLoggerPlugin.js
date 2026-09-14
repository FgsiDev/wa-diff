__d(
  "AdsCanvasDocumentSaveSuccessDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_document_save_success", {
            canvas_template_id: t.templateID,
            canvasID: t.canvasID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
