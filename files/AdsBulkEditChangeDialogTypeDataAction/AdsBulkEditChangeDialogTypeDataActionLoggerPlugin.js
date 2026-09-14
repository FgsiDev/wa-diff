__d(
  "AdsBulkEditChangeDialogTypeDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("bulk_edit_change_dialog_type", {
            bulk_edit_dialog_type: t.dialogType,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
