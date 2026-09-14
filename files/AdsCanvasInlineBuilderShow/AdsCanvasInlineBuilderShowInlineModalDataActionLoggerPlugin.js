__d(
  "AdsCanvasInlineBuilderShowInlineModalDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.showModal
            ? r("adsMgmtLogger")(
                "canvas_inline_builder_enter",
                babelHelpers.extends({}, t.loggingData, {
                  canvas_template_id: t.templateID,
                  canvas_id: t.canvasID,
                }),
              )
            : r("adsMgmtLogger")(
                "canvas_inline_builder_exit",
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
