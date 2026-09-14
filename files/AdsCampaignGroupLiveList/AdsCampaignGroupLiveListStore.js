__d(
  "AdsCampaignGroupLiveListStore",
  [
    "AdsBaseListStore_LEGACY",
    "AdsCampaignGroupListPartialLoadDataActionFlux",
    "AdsCampaignGroupLiveListBatchLoadErrorActionFlux",
    "AdsCampaignGroupLiveListBatchLoadedActionFlux",
    "AdsCampaignGroupLiveListDataManager",
    "AdsDraftDraftCloseDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadedDataActionFlux",
    "AdsDraftDraftDiscardedDataActionFlux",
    "AdsDraftDraftSetCurrentDraftSuccessDataActionFlux",
    "AdsLoadState_LEGACY",
    "AdsPEExportDataPreloadedActionFlux",
    "adsCastToAdsApplicationID",
    "adsDraftGetIDsToInvalidateAfterPublish",
    "adsDraftIsApplicationIDPowerEditor",
    "naturalComparator",
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
            return r("AdsCampaignGroupLiveListDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsCampaignGroupListPartialLoadDataActionFlux").actionType,
              o("AdsCampaignGroupLiveListBatchLoadErrorActionFlux").actionType,
              o("AdsCampaignGroupLiveListBatchLoadedActionFlux").actionType,
              o("AdsDraftDraftCloseDataActionFlux").actionType,
              o("AdsDraftDraftCurrentDraftLoadedDataActionFlux").actionType,
              o("AdsDraftDraftDiscardedDataActionFlux").actionType,
              o("AdsDraftDraftSetCurrentDraftSuccessDataActionFlux").actionType,
              o("AdsPEExportDataPreloadedActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            if ("adsApplicationID" in n) {
              var a = n.adsApplicationID;
              if (
                !r("adsDraftIsApplicationIDPowerEditor")(
                  typeof a == "string"
                    ? r("adsCastToAdsApplicationID")(a)
                    : null,
                )
              )
                return;
            }
            switch (n.type) {
              case o("AdsCampaignGroupListPartialLoadDataActionFlux")
                .actionType:
                (this.__setTotalCount(n.accountID, n.totalCount),
                  this.__handleDataFor(
                    n.accountID,
                    n.campaignGroups,
                    r("AdsLoadState_LEGACY").LOADING,
                  ));
                break;
              case o("AdsCampaignGroupLiveListBatchLoadedActionFlux")
                .actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, t.data, r("AdsLoadState_LEGACY").LOADED);
                });
                break;
              case o("AdsCampaignGroupLiveListBatchLoadErrorActionFlux")
                .actionType:
                n.responses instanceof Map &&
                  n.responses.forEach(function (t, n) {
                    e.__handleDataFor(n, null, r("AdsLoadState_LEGACY").ERROR);
                  });
                break;
              case o("AdsPEExportDataPreloadedActionFlux").actionType:
                this.$AdsCampaignGroupLiveListStore$p_1(
                  n.childMap.campaignGroup,
                );
                break;
              case o("AdsDraftDraftCurrentDraftLoadedDataActionFlux")
                .actionType:
              case o("AdsDraftDraftDiscardedDataActionFlux").actionType:
              case o("AdsDraftDraftSetCurrentDraftSuccessDataActionFlux")
                .actionType:
                this.$AdsCampaignGroupLiveListStore$p_2();
                break;
              case o("AdsDraftDraftCloseDataActionFlux").actionType:
                this.$AdsCampaignGroupLiveListStore$p_3(n);
                break;
            }
          }),
          (n.getSortKey = function () {
            return "name";
          }),
          (n.compare = function (t, n) {
            return r("naturalComparator")(t, n);
          }),
          (n.$AdsCampaignGroupLiveListStore$p_1 = function (t) {
            var e = this;
            t.forEach(function (t, n) {
              e.__handleDataFor(n, t, r("AdsLoadState_LEGACY").LOADED);
            });
          }),
          (n.$AdsCampaignGroupLiveListStore$p_2 = function () {
            this.__invalidateEntireCache() && this.__emitChange();
          }),
          (n.$AdsCampaignGroupLiveListStore$p_3 = function (t) {
            var e = this,
              n = r("adsDraftGetIDsToInvalidateAfterPublish")({
                ancestorIDs: t.ancestorIDs,
                publishedObjectIDs: t.publishedObjectIDs,
              }),
              o = n.map(function (t) {
                return e.__invalidate(t);
              });
            o.some(function (e) {
              return e;
            }) && this.__emitChange();
          }),
          t
        );
      })(r("AdsBaseListStore_LEGACY")),
      s = new e();
    l.default = s;
  },
  98,
);
