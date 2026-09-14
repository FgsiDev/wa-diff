__d(
  "AdsCanvasAddNewLifestyleComponentActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_add_new_lifestyle_component", {
            canvasID: t.canvasID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
