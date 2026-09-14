__d(
  "AdsPlayableAssetDataStore",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsPlayableAssetBatchLoadedDataActionFlux",
    "AdsPlayableAssetDataManager",
    "AdsPlayableUploadFailDataActionFlux",
    "AdsPlayableUploadSuccessDataActionFlux",
    "FluxLoadObjectStore",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.getCurrentAccountPlayableAssetsSelector = r(
              "adsCreateStoreSelector",
            )(
              [babelHelpers.assertThisInitialized(t), r("AdsAccountStore")],
              function () {
                return t.get(r("AdsAccountStore").getSelectedAccountIDX());
              },
              { name: i.id },
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getActionTypes = function () {
            return [
              this.getActionTypeStartLoad(),
              o("AdsPlayableAssetBatchLoadedDataActionFlux").actionType,
              o("AdsPlayableUploadFailDataActionFlux").actionType,
              o("AdsPlayableUploadSuccessDataActionFlux").actionType,
            ];
          }),
          (n.reduce = function (t, n) {
            var e = n.action;
            switch (e.actionType) {
              case o("AdsPlayableAssetBatchLoadedDataActionFlux").actionType:
                return this.__handleOne(t, e.accountID, e.playableAssets);
              case o("AdsPlayableUploadSuccessDataActionFlux").actionType:
              case o("AdsPlayableUploadFailDataActionFlux").actionType:
                return t.clear();
              default:
                return t;
            }
          }),
          (n.__load = function (t) {
            r("AdsPlayableAssetDataManager").load(t);
          }),
          t
        );
      })(r("FluxLoadObjectStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
