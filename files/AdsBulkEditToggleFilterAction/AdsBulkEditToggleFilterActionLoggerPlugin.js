__d(
  "AdsBulkEditToggleFilterActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("click_only_show_changes", {
            bulk_edit_operation: t.filterType,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
