__d(
  "AdsRichMediaEditorSetDocumentThemeDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_set_document_theme", { canvasID: t.id });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
