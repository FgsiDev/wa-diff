__d(
  "AdsToplineListStore",
  [
    "AdsBaseListStore_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsToplineListBatchLoadErrorDataActionFlux",
    "AdsToplineListBatchLoadedDataActionFlux",
    "AdsToplineListDataManager",
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
            return r("AdsToplineListDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsToplineListBatchLoadErrorDataActionFlux").actionType,
              o("AdsToplineListBatchLoadedDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            switch (n.actionType) {
              case o("AdsToplineListBatchLoadedDataActionFlux").actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, t, r("AdsLoadState_LEGACY").LOADED);
                });
                break;
              case o("AdsToplineListBatchLoadErrorDataActionFlux").actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, null, r("AdsLoadState_LEGACY").ERROR);
                });
                break;
            }
          }),
          (n.getSortKey = function () {
            return "line_number";
          }),
          (n.compare = function (t, n) {
            return t < n ? -1 : t > n ? 1 : 0;
          }),
          t
        );
      })(r("AdsBaseListStore_LEGACY")),
      s = new e();
    l.default = s;
  },
  98,
);
