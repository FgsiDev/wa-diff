__d(
  "AdsCanvasDocumentDuplicateSuccessDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_document_duplicate_success", {
            canvas_template_id: t.canvasID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
