__d(
  "AdsAutoFixTargetingStore",
  [
    "AdsAutoFixTargetingDataManager",
    "AdsBaseDataStore_LEGACY",
    "AdsCampaignAutoFixBatchLoadErrorDataActionFlux",
    "AdsCampaignAutoFixBatchLoadedDataActionFlux",
    "AdsCampaignAutoFixUpdateStatusDataActionFlux",
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
          (n.getDataManager = function () {
            return r("AdsAutoFixTargetingDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsCampaignAutoFixBatchLoadErrorDataActionFlux").actionType,
              o("AdsCampaignAutoFixBatchLoadedDataActionFlux").actionType,
              o("AdsCampaignAutoFixUpdateStatusDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            switch (e.type) {
              case o("AdsCampaignAutoFixBatchLoadedDataActionFlux").actionType:
                this.__handleData(e.responses, r("AdsLoadState_LEGACY").LOADED);
                break;
              case o("AdsCampaignAutoFixBatchLoadErrorDataActionFlux")
                .actionType:
                this.__handleData(e.errors, r("AdsLoadState_LEGACY").ERROR);
                break;
              case o("AdsCampaignAutoFixUpdateStatusDataActionFlux").actionType:
                var n = e.data,
                  a = n.campaignID;
                if (a) this.$AdsAutoFixTargetingStore$p_1(a, n);
                else break;
                break;
            }
          }),
          (n.$AdsAutoFixTargetingStore$p_1 = function (t, n) {
            r("AdsAutoFixTargetingDataManager").updateStatus(
              t,
              n.bannerType,
              n.status,
            );
          }),
          t
        );
      })(r("AdsBaseDataStore_LEGACY")),
      s = new e();
    l.default = s;
  },
  98,
);
