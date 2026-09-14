__d(
  "AdsProductSetStore_DEPRECATED",
  [
    "AdsBaseDataStore_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsProductSetBatchCreateErrorDataActionFlux",
    "AdsProductSetBatchDeleteErrorDataActionFlux",
    "AdsProductSetBatchLoadErrorDataActionFlux",
    "AdsProductSetBatchLoadedDataActionFlux",
    "AdsProductSetCreateBatchDataActionFlux",
    "AdsProductSetDataManager",
    "AdsUEditorCampaignProductSetBatchCreatedActionFlux",
    "CatalogBusinessEventsLoggerHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.creationResponse = null),
            (t.responseMap = new Map()),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDataManager = function () {
            return r("AdsProductSetDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsProductSetBatchCreateErrorDataActionFlux").actionType,
              o("AdsUEditorCampaignProductSetBatchCreatedActionFlux")
                .actionType,
              o("AdsProductSetBatchDeleteErrorDataActionFlux").actionType,
              o("AdsProductSetBatchLoadErrorDataActionFlux").actionType,
              o("AdsProductSetBatchLoadedDataActionFlux").actionType,
              o("AdsProductSetCreateBatchDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            switch (n.type) {
              case o("AdsProductSetBatchLoadedDataActionFlux").actionType:
                this.__handleData(
                  n.productSets,
                  r("AdsLoadState_LEGACY").LOADED,
                );
                break;
              case o("AdsProductSetBatchDeleteErrorDataActionFlux").actionType:
              case o("AdsProductSetBatchLoadErrorDataActionFlux").actionType:
                this.__handleData(n.errors, r("AdsLoadState_LEGACY").ERROR);
                break;
              case o("AdsProductSetBatchCreateErrorDataActionFlux").actionType:
                (this.__handleData(n.errors, r("AdsLoadState_LEGACY").ERROR),
                  n.errors.forEach(function (t, n) {
                    var r = t;
                    r.code == 10803
                      ? ((e.creationResponse = {
                          result: "duplicate",
                          catalogID: r.productCatalogID,
                          duplicateId: r.error_data.product_set_id,
                        }),
                        e.responseMap.set(
                          r.productCatalogID,
                          e.creationResponse,
                        ),
                        e.__emitChange())
                      : r.error_subcode == 1798130 &&
                        ((e.creationResponse = {
                          result: "empty",
                          catalogID: r.productCatalogID,
                        }),
                        e.responseMap.set(
                          r.productCatalogID,
                          e.creationResponse,
                        ),
                        e.__emitChange());
                  }));
                break;
              case o("AdsProductSetCreateBatchDataActionFlux").actionType:
                this.$AdsProductSetStore_DEPRECATED$p_1(
                  n.productCatalogID,
                  n.objectsData,
                  n.source,
                );
                break;
              case o("AdsUEditorCampaignProductSetBatchCreatedActionFlux")
                .actionType:
                ((this.creationResponse = {
                  result: "success",
                  catalogID: n.productCatalogID,
                  productSetID: n.productSetID,
                }),
                  this.responseMap.set(
                    n.productCatalogID,
                    this.creationResponse,
                  ),
                  this.__emitChange(),
                  n.isSuggested &&
                    r("CatalogBusinessEventsLoggerHelper")
                      .getProductSetsSelectorDialogLogger(n.productCatalogID)
                      .setEvent("suggested_product_set_created")
                      .setActionData({ product_set_id: n.productSetID })
                      .log());
                break;
            }
          }),
          (n.$AdsProductSetStore_DEPRECATED$p_1 = function (t, n, o) {
            r("AdsProductSetDataManager").createProductSetsForProductCatalog(
              t,
              n,
              o,
            );
          }),
          (n.retrieveCreationResponseByCatalogId = function (t) {
            var e = this.responseMap.get(t);
            return (this.responseMap.delete(t), e);
          }),
          (n.retrieveAllCreationResponses = function () {
            var e = new Map(this.responseMap);
            return (this.responseMap.clear(), e);
          }),
          (n.retrieveLastCreationResponse = function () {
            var e = this.creationResponse;
            return (
              e && e.catalogID && this.responseMap.delete(e.catalogID),
              (this.creationResponse = null),
              e
            );
          }),
          (n.getLastCachedCreationResponse = function () {
            return this.creationResponse;
          }),
          t
        );
      })(r("AdsBaseDataStore_LEGACY")),
      s = new e();
    l.default = s;
  },
  98,
);
