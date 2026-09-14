__d(
  "AdsWhatsAppConnectAccountDialogCloseDialogDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          t.actionType != null &&
            r("adsMgmtLogger")(
              t.actionType,
              babelHelpers.extends(
                { action_type: t.actionType, page_id: t.pageID },
                t.logData,
              ),
            );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
