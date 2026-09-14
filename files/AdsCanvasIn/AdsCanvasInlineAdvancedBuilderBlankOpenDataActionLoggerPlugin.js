__d(
  "AdsCanvasInlineAdvancedBuilderBlankOpenDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_inline_advanced_builder_open", {
            canvas_template_id: t.templateID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
