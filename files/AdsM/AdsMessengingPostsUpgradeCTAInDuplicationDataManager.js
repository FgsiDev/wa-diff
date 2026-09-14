__d(
  "AdsMessengingPostsUpgradeCTAInDuplicationDataManager",
  [
    "AsyncTypedRequest",
    "Promise",
    "XAdsManagerMessageAdsPostsUpgradeCTAInDuplicationControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {}
        var o = t.prototype;
        return (
          (o.getAllPostUpgraded = function (t) {
            var e = this;
            t.forEach(function (t) {
              return e.getIsPostUpgrade(t);
            });
          }),
          (o.getIsPostUpgrade = function (o) {
            var t = r(
              "XAdsManagerMessageAdsPostsUpgradeCTAInDuplicationControllerRouteBuilder",
            ).buildURL({ post_id: o });
            return new (e || (e = n("Promise")))(function (e, n) {
              new (r("AsyncTypedRequest"))()
                .setURI(t)
                .setPayloadHandler(function (t) {
                  return e(t);
                })
                .setErrorHandler(function (e) {
                  n(e);
                })
                .send();
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
