__d(
  "AdsPagingChangeTableUILoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")("tableui_user_action", {
            action_type: t.actionType,
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
