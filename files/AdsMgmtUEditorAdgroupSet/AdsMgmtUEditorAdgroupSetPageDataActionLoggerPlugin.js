__d(
  "AdsMgmtUEditorAdgroupSetPageDataActionLoggerPlugin",
  ["AdsUEditorAdgroupSetPageDataActionFlux", "adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            "ad_set_page",
            babelHelpers.extends(
              {
                action_type: o("AdsUEditorAdgroupSetPageDataActionFlux")
                  .actionType,
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
