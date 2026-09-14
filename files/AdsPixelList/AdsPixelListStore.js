__d(
  "AdsPixelListStore",
  [
    "AdsAdsPixelListPartialLoadDataActionFlux",
    "AdsBaseListStore_LEGACY",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPixelListBatchLoadErrorDataActionFlux",
    "AdsPixelListBatchLoadedDataActionFlux",
    "AdsPixelListDataManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ",",
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDataManager = function () {
            return r("AdsPixelListDataManager");
          }),
          (a.getStorageKey = function (n, r, o, a) {
            return o === void 0 && r === void 0 && o === void 0
              ? n
              : [n, r, o, a].join(e);
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsAdsPixelListPartialLoadDataActionFlux").actionType,
              o("AdsPixelListBatchLoadErrorDataActionFlux").actionType,
              o("AdsPixelListBatchLoadedDataActionFlux").actionType,
            ];
          }),
          (a.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            switch (n.actionType) {
              case o("AdsAdsPixelListPartialLoadDataActionFlux").actionType:
                this.__handleDataFor(
                  n.sourceID,
                  n.adsPixels,
                  r("AdsLoadState_LEGACY").LOADING,
                );
                break;
              case o("AdsPixelListBatchLoadErrorDataActionFlux").actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, null, r("AdsLoadState_LEGACY").ERROR);
                });
                break;
              case o("AdsPixelListBatchLoadedDataActionFlux").actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, t.data, r("AdsLoadState_LEGACY").LOADED);
                });
                break;
            }
          }),
          (a.getLoadObjectForBusiness = function (t, n, r, a) {
            return o("AdsLoadStateUtils_LEGACY").listObjectToLoadObject(
              this.getForBusiness(t, n, r, a),
            );
          }),
          (a.getForBusiness = function (t, n, o, a) {
            var e = this.getStorageKey(t, n, o, a),
              i = this.getCachedFor(e);
            return i.loadState === r("AdsLoadState_LEGACY").NOT_LOADED
              ? (r("AdsPixelListDataManager").loadForBusiness(e, t, n, o, a),
                this.__updateLoadingFor([e]),
                { loadState: r("AdsLoadState_LEGACY").LOADING, list: [] })
              : i;
          }),
          n
        );
      })(r("AdsBaseListStore_LEGACY")),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
