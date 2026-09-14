__d(
  "AdsMgmtUEditorAdgroupSetHasCanvasLinkDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("adgroup_set_has_canvas_link", {
            is_canvas_checkbox_checked: !t.isChecked,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
