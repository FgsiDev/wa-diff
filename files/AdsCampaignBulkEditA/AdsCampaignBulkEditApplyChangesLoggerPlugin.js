__d(
  "AdsCampaignBulkEditApplyChangesLoggerPlugin",
  ["adsMgmtGetChangedAdObjectCountByColumnKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = r("adsMgmtGetChangedAdObjectCountByColumnKey")(
            t.changedColumnsByRowMap,
          );
          e.forEach(function (e, t) {});
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
