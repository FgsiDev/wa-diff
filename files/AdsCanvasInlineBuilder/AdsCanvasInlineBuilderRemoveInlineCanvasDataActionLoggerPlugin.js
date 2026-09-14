__d(
  "AdsCanvasInlineBuilderRemoveInlineCanvasDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "canvas_inline_canvas_remove",
            babelHelpers.extends({}, t.loggingData, {
              canvas_template_id: t.templateID,
            }),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
