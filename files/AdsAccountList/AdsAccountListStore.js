__d(
  "AdsAccountListStore",
  [
    "AdsAccountListBatchLoadErrorDataActionFlux",
    "AdsAccountListBatchLoadedDataActionFlux",
    "AdsAccountListDataManager",
    "AdsAccountListPartialLoadDataActionFlux",
    "AdsBaseListStore_LEGACY",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
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
          (n.get = function (t) {
            return o("AdsLoadStateUtils_LEGACY").listObjectToLoadObject(
              this.getFor(t),
            );
          }),
          (n.getAllAccountIDs = function () {
            return this.getFor(
              o("AdsAccountListDataManager").AdsAccountListDataKeys.SUPER_KEY,
            );
          }),
          (n.getPersonalAdAccountIDs = function () {
            return this.getFor(
              o("AdsAccountListDataManager").AdsAccountListDataKeys
                .PERSONAL_AD_ACCOUNT_SUPER_KEY,
            );
          }),
          (n.getPersonalAdAccountIDsLoadObject = function () {
            return o("AdsLoadStateUtils_LEGACY").listObjectToLoadObject(
              this.getPersonalAdAccountIDs(),
            );
          }),
          (n.getDataManager = function () {
            return o("AdsAccountListDataManager").AdsAccountListDataManager;
          }),
          (n.getIDKey = function () {
            return "account_id";
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsAccountListBatchLoadErrorDataActionFlux").actionType,
              o("AdsAccountListBatchLoadedDataActionFlux").actionType,
              o("AdsAccountListPartialLoadDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            switch (e.actionType) {
              case o("AdsAccountListBatchLoadedDataActionFlux").actionType:
                this.__handleDataFor(
                  e.id,
                  e.accounts,
                  r("AdsLoadState_LEGACY").LOADED,
                );
                break;
              case o("AdsAccountListPartialLoadDataActionFlux").actionType:
                (this.__setTotalCount(e.id, e.totalCount),
                  this.__handleDataFor(
                    e.id,
                    e.accounts,
                    r("AdsLoadState_LEGACY").LOADING,
                  ));
                break;
              case o("AdsAccountListBatchLoadErrorDataActionFlux").actionType:
                this.__handleDataFor(
                  e.id,
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
