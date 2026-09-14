__d(
  "AdsPromotableAppListStore",
  [
    "AdsBaseListStore_LEGACY",
    "AdsConnectionObjectListBatchLoadedDataActionFlux",
    "AdsConnectionObjectUtils",
    "AdsLoadState_LEGACY",
    "AdsPromotableAppListDataManager",
    "AdsPromotableApplicationListBatchLoadErrorDataActionFlux",
    "AdsPromotableApplicationListBatchLoadedDataActionFlux",
    "AdsPromotableApplicationListPartialLoadDataActionFlux",
    "AdsPromotableApplicationLoadedDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$AdsPromotableAppListStoreClass$p_1 = function (e) {
              return o("AdsConnectionObjectUtils").isApp(e);
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDataManager = function () {
            return r("AdsPromotableAppListDataManager");
          }),
          (n.$AdsPromotableAppListStoreClass$p_2 = function (t) {
            return t.filter(this.$AdsPromotableAppListStoreClass$p_1);
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsConnectionObjectListBatchLoadedDataActionFlux").actionType,
              o("AdsPromotableApplicationListBatchLoadErrorDataActionFlux")
                .actionType,
              o("AdsPromotableApplicationListBatchLoadedDataActionFlux")
                .actionType,
              o("AdsPromotableApplicationListPartialLoadDataActionFlux")
                .actionType,
              o("AdsPromotableApplicationLoadedDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            switch (n.actionType) {
              case o("AdsConnectionObjectListBatchLoadedDataActionFlux")
                .actionType:
                this.__handleDataFor(
                  n.accountID,
                  this.$AdsPromotableAppListStoreClass$p_2(n.connectionObjects),
                  r("AdsLoadState_LEGACY").LOADED,
                );
                break;
              case o("AdsPromotableApplicationListBatchLoadedDataActionFlux")
                .actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, t.data, r("AdsLoadState_LEGACY").LOADED);
                });
                break;
              case o("AdsPromotableApplicationLoadedDataActionFlux")
                .actionType: {
                var a = n.accountID,
                  i = n.promotableApplication;
                this.__handleDataFor(a, [i], r("AdsLoadState_LEGACY").LOADED);
                break;
              }
              case o("AdsPromotableApplicationListPartialLoadDataActionFlux")
                .actionType:
                this.__handleDataFor(
                  n.accountID,
                  n.promotableApplications,
                  r("AdsLoadState_LEGACY").LOADING,
                );
                break;
              case o("AdsPromotableApplicationListBatchLoadErrorDataActionFlux")
                .actionType:
                this.__handleDataFor(
                  n.accountID,
                  null,
                  r("AdsLoadState_LEGACY").ERROR,
                );
                break;
            }
          }),
          t
        );
      })(r("AdsBaseListStore_LEGACY")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
