__d(
  "AdsPEDiscardConfirmDialogToggleLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            t.discardConfirmDialogShown.dialogShown
              ? "discard_confirm_dialog_show"
              : "discard_confirm_dialog_hide",
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
