__d(
  "AdsCanvasElementSwitchButtonPositionDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("canvas_element_switch_button_position", {
            canvasID: t.canvasID,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
