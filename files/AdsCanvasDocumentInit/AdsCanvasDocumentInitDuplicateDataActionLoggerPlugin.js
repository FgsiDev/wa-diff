__d(
  "AdsCanvasDocumentInitDuplicateDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_document_init_duplicate", {
            canvas_template_id: t.templateID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
