__d(
  "AdsSelectionTreeChangeTableUILoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "tableui_user_action",
            babelHelpers.extends(
              {
                action_type: t.actionType,
                current_action_items_count: t.selectedIDs.length,
              },
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
