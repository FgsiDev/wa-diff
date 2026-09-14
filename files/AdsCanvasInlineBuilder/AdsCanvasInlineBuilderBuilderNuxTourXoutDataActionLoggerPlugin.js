__d(
  "AdsCanvasInlineBuilderBuilderNuxTourXoutDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_inline_builder_nux_tour_xout", {
            nux_tour_step: t.nuxStep,
            canvas_template_id: t.templateID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
