__d(
  "AdsCanvasElementLoadSuccessDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_element_load_success", {
            canvasID: t.elementID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
