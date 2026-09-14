__d(
  "AdsCanvasInitDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_init", {
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
