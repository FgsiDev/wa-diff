__d(
  "AdsSetWidthTableUILoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = { action_type: t.actionType, width: t.width };
          r("adsMgmtLogger")(
            "tableui_user_action",
            babelHelpers.extends({}, e, t.logData),
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
