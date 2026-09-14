__d(
  "AdsPEPurgeArchiveDataManager",
  [
    "AdsGraphAPI",
    "AdsPEAccountPurgeHelper",
    "AdsPEPurgeArchiveActions",
    "AdsPERefreshTableViewAction",
    "FBLogger",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "DELETE_OLDEST",
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.startPurge = function (n) {
            var t = this,
              a = n.account_id;
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .adaccount(a)
                .edge("ads")
                .remove({ delete_strategy: e }),
              function () {
                o("AdsPEPurgeArchiveActions").purgeFinished();
              },
              function (e) {
                (r("FBLogger")("ads")
                  .catching(e)
                  .info(
                    "Async archived-ad purge failed; falling back to sync helper",
                  ),
                  t.$1(n));
              },
            );
          }),
          (n.$1 = function (t) {
            var e = t.account_id;
            r("AdsPEAccountPurgeHelper").purge([e], function (e, t) {
              e
                ? (r("AdsPERefreshTableViewAction").dispatch(
                    { adLevel: null, allLevels: !0 },
                    {
                      line: "75",
                      module: "AdsPEPurgeArchiveDataManager.js",
                      moduleID: i.id,
                    },
                  ),
                  o("AdsPEPurgeArchiveActions").purgeFinished())
                : o("AdsPEPurgeArchiveActions").purgeProgress(t);
            });
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
