__d(
  "AdsProductSetListStore",
  [
    "AdsBaseListStore_LEGACY",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsProductSetBatchDeletedDataActionFlux",
    "AdsProductSetCreatedActionFlux",
    "AdsProductSetEditedActionFlux",
    "AdsProductSetListBatchLoadErrorDataActionFlux",
    "AdsProductSetListBatchLoadedDataActionFlux",
    "AdsProductSetListDataManager",
    "AdsProductSetListPartialLoadDataActionFlux",
    "AdsUEditorCampaignProductSetBatchCreatedActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDataManager = function () {
            return r("AdsProductSetListDataManager");
          }),
          (n.getLoadObjectFor = function (t) {
            return o("AdsLoadStateUtils_LEGACY").listObjectToLoadObject(
              this.getFor(t),
            );
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsUEditorCampaignProductSetBatchCreatedActionFlux")
                .actionType,
              o("AdsProductSetBatchDeletedDataActionFlux").actionType,
              o("AdsProductSetCreatedActionFlux").actionType,
              o("AdsProductSetEditedActionFlux").actionType,
              o("AdsProductSetListBatchLoadErrorDataActionFlux").actionType,
              o("AdsProductSetListBatchLoadedDataActionFlux").actionType,
              o("AdsProductSetListPartialLoadDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            switch (n.actionType) {
              case o("AdsProductSetListBatchLoadedDataActionFlux").actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, t.data, r("AdsLoadState_LEGACY").LOADED);
                });
                break;
              case o("AdsProductSetListBatchLoadErrorDataActionFlux")
                .actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, null, r("AdsLoadState_LEGACY").ERROR);
                });
                break;
              case o("AdsProductSetListPartialLoadDataActionFlux").actionType:
                this.__handleDataFor(
                  n.productCatalogID,
                  n.productSets,
                  r("AdsLoadState_LEGACY").LOADING,
                );
                break;
              case o("AdsUEditorCampaignProductSetBatchCreatedActionFlux")
                .actionType:
              case o("AdsProductSetCreatedActionFlux").actionType:
              case o("AdsProductSetEditedActionFlux").actionType:
                this.$AdsProductSetListStoreClass$p_1(n.productCatalogID);
                break;
              case o("AdsProductSetBatchDeletedDataActionFlux").actionType:
                this.$AdsProductSetListStoreClass$p_1(n.productCatalogID);
                break;
            }
          }),
          (n.$AdsProductSetListStoreClass$p_1 = function (t) {
            this.__invalidate(t) && this.__emitChange();
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
