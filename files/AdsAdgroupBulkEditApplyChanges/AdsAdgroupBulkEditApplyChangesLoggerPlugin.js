__d(
  "AdsAdgroupBulkEditApplyChangesLoggerPlugin",
  [
    "AdsRelatedMediaBulkEditLoggingUtils",
    "adsMgmtGetChangedAdObjectCountByColumnKey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e + t;
    }
    var s = {
        log: function (n) {
          var t = n.changedAdgroupsMap,
            a = n.changedColumnsByRowMap,
            i = n.isInstantPublish,
            l = r("adsMgmtGetChangedAdObjectCountByColumnKey")(a),
            s = l.reduce(e, 0);
          (l.forEach(function (e, t) {}),
            s > 0 &&
              a != null &&
              o(
                "AdsRelatedMediaBulkEditLoggingUtils",
              ).logRelatedMediaApplyOrPublish(a, t, i));
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
