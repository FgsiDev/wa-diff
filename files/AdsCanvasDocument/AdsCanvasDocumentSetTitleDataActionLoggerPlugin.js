__d(
  "AdsCanvasDocumentSetTitleDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_document_set_title", { canvasID: t.id });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
