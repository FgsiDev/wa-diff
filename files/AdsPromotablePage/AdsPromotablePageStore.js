__d(
  "AdsPromotablePageStore",
  [
    "AdsBaseConnectionObjectStore",
    "AdsPageStore",
    "AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux",
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
          (n.getAllFor = function (t, n) {
            return r("AdsPageStore").getAllPromotable(n);
          }),
          (n.getAllCachedFor = function (t, n) {
            var e = new Map();
            return (
              n.forEach(function (t) {
                return e.set(t, r("AdsPageStore").getCached(t));
              }),
              e
            );
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux")
                .actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            switch (e.type) {
              case o(
                "AdsWhatsAppConnectAccountDialogVerifyCodeSuccessActionFlux",
              ).actionType:
                this.$AdsPromotablePageStoreClass$p_1(e.pageID);
                break;
            }
          }),
          (n.$AdsPromotablePageStoreClass$p_1 = function (t) {
            r("AdsPageStore").refetchPage([t]);
          }),
          t
        );
      })(r("AdsBaseConnectionObjectStore")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
