__d(
  "AdsCanvasInlineBuilderShowProductTaggingOverlayDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_show_product_tagging_overlay", {
            canvasID: t.productID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
