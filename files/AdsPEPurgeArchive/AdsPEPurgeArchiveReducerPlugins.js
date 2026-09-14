__d(
  "AdsPEPurgeArchiveReducerPlugins",
  [
    "AdsPEPurgeArchiveDataManager",
    "AdsPEPurgeArchiveProviderState",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.merge({ isDeleting: !1, isDialogShown: !1 });
        },
      },
      s = {
        reduce: function (t, n) {
          return t.update(
            "deletedCount",
            function (e) {
              return e + n.count;
            },
            0,
          );
        },
      },
      u = {
        reduce: function (t, n) {
          return new (r("AdsPEPurgeArchiveProviderState"))({
            account: n.account,
            isDialogShown: !0,
            totalItemsToPurge: n.totalItemsToPurge,
          });
        },
      },
      c = {
        reduce: function (t, n) {
          return (
            r("AdsPEPurgeArchiveDataManager").startPurge(
              r("nullthrows")(t.account),
            ),
            t.set("isDeleting", !0)
          );
        },
      };
    ((l.purgeFinished = e),
      (l.purgeProgress = s),
      (l.showDialog = u),
      (l.startPurge = c));
  },
  98,
);
