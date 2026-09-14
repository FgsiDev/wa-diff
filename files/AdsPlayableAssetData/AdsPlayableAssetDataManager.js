__d(
  "AdsPlayableAssetDataManager",
  ["AdsGraphAPI", "AdsPlayableAssetBatchLoadedDataAction", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["id", "name"],
      s = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.load = function (n) {
            r("promiseDone")(
              o("AdsGraphAPI")
                .get(i.id)
                .adaccount(n)
                .edge("adplayables")
                .batched()
                .get({ fields: e })
                .then(),
              function (e) {
                r("AdsPlayableAssetBatchLoadedDataAction").dispatch(
                  { accountID: n, playableAssets: e.data },
                  {
                    line: "32",
                    module: "AdsPlayableAssetDataManager.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {},
            );
          }),
          t
        );
      })(),
      u = new s();
    l.default = u;
  },
  98,
);
