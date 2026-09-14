__d(
  "AdsCanvasElementLoadErrorDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e, n;
          r("adsMgmtLogger")("canvas_element_load_error", {
            canvasID: t.elementID,
            error_message:
              (e = (n = t.error) == null ? void 0 : n.message) != null
                ? e
                : null,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
