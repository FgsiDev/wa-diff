__d(
  "AdsCanvasClearDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_clear_data", { canvasID: t.canvasID });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
