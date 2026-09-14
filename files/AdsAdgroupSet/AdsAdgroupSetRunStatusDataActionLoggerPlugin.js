__d(
  "AdsAdgroupSetRunStatusDataActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          r("adsMgmtLogger")(
            t.runStatus === "ACTIVE"
              ? "ad_group_set_active"
              : "ad_group_set_pause",
            { object_ids: t.ids },
            "run_status",
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
