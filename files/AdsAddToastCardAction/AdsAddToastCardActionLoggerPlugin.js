__d(
  "AdsAddToastCardActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "table_toast_card_action",
            babelHelpers.extends(
              { action_type: t.toastCard.useCase },
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
