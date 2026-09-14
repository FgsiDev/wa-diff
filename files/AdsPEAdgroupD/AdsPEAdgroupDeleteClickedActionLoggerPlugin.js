__d(
  "AdsPEAdgroupDeleteClickedActionLoggerPlugin",
  ["adsMgmtLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = "delete_clicked";
          t.adgroupIDs.forEach(function (t) {
            return r("adsMgmtLogger")(e, { adgroup_id: t });
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
