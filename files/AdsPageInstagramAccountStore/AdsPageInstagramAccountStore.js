__d(
  "AdsPageInstagramAccountStore",
  [
    "AdsBaseDataStore_LEGACY",
    "AdsInstagramAccountErrorRefreshAllErrorsDataActionFlux",
    "AdsInstagramAccountPageBatchLoadErrorDataActionFlux",
    "AdsInstagramAccountPageBatchLoadedDataActionFlux",
    "AdsInstagramAccountPageClearAccountsDataActionFlux",
    "AdsInstagramAccountPageCreateAndUsePageBackedDataActionFlux",
    "AdsInstagramAccountPageCreatePageBackedErrorDataActionFlux",
    "AdsInstagramAccountPageCreatePageBackedSuccessDataActionFlux",
    "AdsInstagramAccountPageHandleLinkAccountResponseDataActionFlux",
    "AdsLoadState_LEGACY",
    "AdsPageInstagramAccountDataManager",
    "InstagramAuthenticationErrorMessagesUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.$AdsPageInstagramAccountStore$p_1 = {}),
            (t.$AdsPageInstagramAccountStore$p_2 = {}),
            (t.$AdsPageInstagramAccountStore$p_3 = {}),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDataManager = function () {
            return r("AdsPageInstagramAccountDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsInstagramAccountErrorRefreshAllErrorsDataActionFlux")
                .actionType,
              o("AdsInstagramAccountPageBatchLoadErrorDataActionFlux")
                .actionType,
              o("AdsInstagramAccountPageBatchLoadedDataActionFlux").actionType,
              o("AdsInstagramAccountPageClearAccountsDataActionFlux")
                .actionType,
              o("AdsInstagramAccountPageCreateAndUsePageBackedDataActionFlux")
                .actionType,
              o("AdsInstagramAccountPageCreatePageBackedErrorDataActionFlux")
                .actionType,
              o("AdsInstagramAccountPageCreatePageBackedSuccessDataActionFlux")
                .actionType,
              o(
                "AdsInstagramAccountPageHandleLinkAccountResponseDataActionFlux",
              ).actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            switch (e.type) {
              case o("AdsInstagramAccountPageBatchLoadedDataActionFlux")
                .actionType:
                this.__handleData(e.specs, r("AdsLoadState_LEGACY").LOADED);
                break;
              case o("AdsInstagramAccountPageBatchLoadErrorDataActionFlux")
                .actionType:
                this.__handleData(e.errors, r("AdsLoadState_LEGACY").ERROR);
                break;
              case o("AdsInstagramAccountPageClearAccountsDataActionFlux")
                .actionType:
                this.__invalidate(e.data.pageID);
                break;
              case o(
                "AdsInstagramAccountPageCreateAndUsePageBackedDataActionFlux",
              ).actionType:
                if (
                  this.$AdsPageInstagramAccountStore$p_1[e.data.pageID] ===
                  r("AdsLoadState_LEGACY").LOADING
                )
                  return;
                ((this.$AdsPageInstagramAccountStore$p_1[e.data.pageID] = r(
                  "AdsLoadState_LEGACY",
                ).LOADING),
                  this.__emitChange(),
                  r(
                    "AdsPageInstagramAccountDataManager",
                  ).createAndUsePageBackedAccount(
                    e.data.campaignID,
                    e.data.adgroupIDs,
                    e.data.pageID,
                    e.data.accessToken,
                    e.source,
                    e.hostID,
                  ));
                break;
              case o(
                "AdsInstagramAccountPageCreatePageBackedErrorDataActionFlux",
              ).actionType:
                this.$AdsPageInstagramAccountStore$p_4(e.data.pageID);
                break;
              case o(
                "AdsInstagramAccountPageCreatePageBackedSuccessDataActionFlux",
              ).actionType:
                this.$AdsPageInstagramAccountStore$p_5(e.data);
                break;
              case o("AdsInstagramAccountErrorRefreshAllErrorsDataActionFlux")
                .actionType:
                this.__invalidateAllErrors() && this.__emitChange();
                break;
              case o(
                "AdsInstagramAccountPageHandleLinkAccountResponseDataActionFlux",
              ).actionType:
                this.$AdsPageInstagramAccountStore$p_6(
                  e.data.pageID,
                  e.data.instagramAccountID,
                  e.data.errorMessages,
                  e.data.errorCode,
                );
                break;
            }
          }),
          (n.getPageBackedAccountCreateState = function (t) {
            return this.$AdsPageInstagramAccountStore$p_1[t]
              ? this.$AdsPageInstagramAccountStore$p_1[t]
              : r("AdsLoadState_LEGACY").LOADED;
          }),
          (n.$AdsPageInstagramAccountStore$p_5 = function (t) {
            (t.instagramAccountIDCallback &&
              t.instagramAccountIDCallback(t.instagramAccountID),
              (this.$AdsPageInstagramAccountStore$p_1[t.pageID] = r(
                "AdsLoadState_LEGACY",
              ).LOADED),
              this.__invalidate(t.pageID));
          }),
          (n.$AdsPageInstagramAccountStore$p_4 = function (t) {
            ((this.$AdsPageInstagramAccountStore$p_1[t] = r(
              "AdsLoadState_LEGACY",
            ).ERROR),
              this.__emitChange());
          }),
          (n.$AdsPageInstagramAccountStore$p_6 = function (t, n, a, i) {
            if (
              ((this.$AdsPageInstagramAccountStore$p_3[t] = r(
                "AdsLoadState_LEGACY",
              ).LOADED),
              !n)
            ) {
              var e = a || [];
              (i &&
                e.push(
                  o("InstagramAuthenticationErrorMessagesUtils").getMessage(i),
                ),
                e.length === 0 &&
                  e.push(
                    o("InstagramAuthenticationErrorMessagesUtils").getMessage(),
                  ),
                (this.$AdsPageInstagramAccountStore$p_2[t] = e),
                this.__emitChange());
              return;
            }
            (this.__invalidate(t), this.__emitChange());
          }),
          t
        );
      })(r("AdsBaseDataStore_LEGACY")),
      s = new e();
    l.default = s;
  },
  98,
);
