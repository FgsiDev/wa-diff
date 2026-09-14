__d(
  "AdsCanvasInlineBuilderSetProductTaggingCoordinatesDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_set_product_tagging_coordinates", {
            canvasID: t.productID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
