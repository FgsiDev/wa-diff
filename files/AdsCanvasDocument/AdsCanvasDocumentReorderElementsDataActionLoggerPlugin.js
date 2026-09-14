__d(
  "AdsCanvasDocumentReorderElementsDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_document_reorder_elements", {
            canvasID: t.id,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
