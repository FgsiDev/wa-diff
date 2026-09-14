__d(
  "AdsPageOfferStore",
  [
    "AdsBaseDataStore_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPageOfferBatchLoadErrorDataActionFlux",
    "AdsPageOfferBatchLoadedDataActionFlux",
    "AdsPageOfferDataManager",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.getSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.get(e);
              },
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDataManager = function () {
            return r("AdsPageOfferDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsPageOfferBatchLoadErrorDataActionFlux").actionType,
              o("AdsPageOfferBatchLoadedDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            switch (e.type) {
              case o("AdsPageOfferBatchLoadedDataActionFlux").actionType:
                this.__handleData(e.offers, r("AdsLoadState_LEGACY").LOADED);
                break;
              case o("AdsPageOfferBatchLoadErrorDataActionFlux").actionType:
                this.__handleData(e.errors, r("AdsLoadState_LEGACY").ERROR);
                break;
            }
          }),
          t
        );
      })(r("AdsBaseDataStore_LEGACY")),
      s = new e();
    l.default = s;
  },
  98,
);
