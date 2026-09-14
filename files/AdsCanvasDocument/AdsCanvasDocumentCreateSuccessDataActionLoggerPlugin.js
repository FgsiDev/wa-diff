__d(
  "AdsCanvasDocumentCreateSuccessDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_document_create_success", {
            canvas_id: t.canvasID,
            canvas_template_id: t.templateID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
