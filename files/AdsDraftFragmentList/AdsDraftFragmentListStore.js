__d(
  "AdsDraftFragmentListStore",
  [
    "AdsBaseListStore_LEGACY",
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsDataAtom",
    "AdsDraftDraftCloseDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadedDataActionFlux",
    "AdsDraftDraftDiscardedDataActionFlux",
    "AdsDraftDraftDiscardedNotificationActionFlux",
    "AdsDraftDraftFragmentBatchCreatedDataActionFlux",
    "AdsDraftDraftFragmentBatchDeletedDataActionFlux",
    "AdsDraftDraftFragmentListBatchLoadErrorDataActionFlux",
    "AdsDraftDraftFragmentListBatchLoadedDataActionFlux",
    "AdsDraftDraftFragmentListLoadedDataActionFlux",
    "AdsDraftDraftFragmentListPartialLoadDataActionFlux",
    "AdsDraftFragmentListDataManager",
    "AdsDraftFragmentStore",
    "AdsLoadState_LEGACY",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getDataManager = function () {
            return r("AdsDraftFragmentListDataManager");
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsCopyCopyCompletedDataActionFlux").actionType,
              o("AdsDraftDraftCloseDataActionFlux").actionType,
              o("AdsDraftDraftCurrentDraftLoadedDataActionFlux").actionType,
              o("AdsDraftDraftDiscardedDataActionFlux").actionType,
              o("AdsDraftDraftDiscardedNotificationActionFlux").actionType,
              o("AdsDraftDraftFragmentBatchCreatedDataActionFlux").actionType,
              o("AdsDraftDraftFragmentBatchDeletedDataActionFlux").actionType,
              o("AdsDraftDraftFragmentListBatchLoadErrorDataActionFlux")
                .actionType,
              o("AdsDraftDraftFragmentListBatchLoadedDataActionFlux")
                .actionType,
              o("AdsDraftDraftFragmentListLoadedDataActionFlux").actionType,
              o("AdsDraftDraftFragmentListPartialLoadDataActionFlux")
                .actionType,
            ];
          }),
          (a.__getDependencyStores = function () {
            return [r("AdsDraftFragmentStore")];
          }),
          (a.__onDispatch = function (n) {
            var t = this,
              a = n.action;
            switch (a.type) {
              case o("AdsDraftDraftDiscardedDataActionFlux").actionType:
                this.__invalidate(a.draftID);
                break;
              case o("AdsDraftDraftDiscardedNotificationActionFlux")
                .actionType: {
                (e || (e = r("AdsDataAtom"))).waitFor(
                  this.getDependencyDispatchTokens(),
                );
                var i = a.draftID,
                  l = a.draftVersion,
                  s = this.getCachedFor(i);
                if (s.loadState === r("AdsLoadState_LEGACY").LOADED) {
                  var u = r("AdsDraftFragmentStore").getAllCached(s.list);
                  for (var c of u) {
                    var d = c[0],
                      m = c[1];
                    m.loadState === r("AdsLoadState_LEGACY").LOADED &&
                      m.draft_version !== l &&
                      this.__invalidateChild(i, m.id);
                  }
                }
                break;
              }
              case o("AdsDraftDraftCloseDataActionFlux").actionType:
                this.$AdsDraftFragmentListStore$p_1(a.draftID, a.fragmentIDs);
                break;
              case o("AdsDraftDraftCurrentDraftLoadedDataActionFlux")
                .actionType:
                r("AdsDraftFragmentListDataManager").loadFor(
                  a.draftID,
                  a.adsApplicationID,
                );
                break;
              case o("AdsDraftDraftFragmentBatchCreatedDataActionFlux")
                .actionType:
                a.fragments.forEach(function (e) {
                  t.__handleDataFor(e.ad_draft_id, [e]);
                });
                break;
              case o("AdsDraftDraftFragmentBatchDeletedDataActionFlux")
                .actionType:
                this.$AdsDraftFragmentListStore$p_2(a.fragments);
                break;
              case o("AdsDraftDraftFragmentListLoadedDataActionFlux")
                .actionType:
                (this.__invalidate(a.draftID),
                  this.__handleDataFor(
                    a.draftID,
                    a.fragments,
                    r("AdsLoadState_LEGACY").LOADED,
                  ));
                break;
              case o("AdsDraftDraftFragmentListBatchLoadedDataActionFlux")
                .actionType:
                a.responses.forEach(function (e, n) {
                  (t.__invalidate(n),
                    t.__handleDataFor(
                      n,
                      e.data,
                      r("AdsLoadState_LEGACY").LOADED,
                    ));
                });
                break;
              case o("AdsDraftDraftFragmentListBatchLoadErrorDataActionFlux")
                .actionType:
                a.errors.forEach(function (e, n) {
                  t.__handleDataFor(n, null, r("AdsLoadState_LEGACY").ERROR);
                });
                break;
              case o("AdsDraftDraftFragmentListPartialLoadDataActionFlux")
                .actionType:
                this.__handleDataFor(
                  a.draftID,
                  a.fragments,
                  r("AdsLoadState_LEGACY").LOADING,
                );
                break;
              case o("AdsCopyCopyCompletedDataActionFlux").actionType:
                if (a.responses.length) {
                  var p = a.responses[0].draftID,
                    _ = a.responses.every(function (e) {
                      return e.draftID === p;
                    });
                  (_ ||
                    r("FBLogger")("ads").warn(
                      "Encountered an unexpected draft ID!",
                    ),
                    this.__handleDataFor(p, a.fragments));
                }
                break;
            }
          }),
          (a.$AdsDraftFragmentListStore$p_2 = function (t) {
            var e = this;
            (t.forEach(function (t) {
              e.__invalidateChild(t.ad_draft_id, t.id);
            }),
              this.__emitChange());
          }),
          (a.$AdsDraftFragmentListStore$p_1 = function (t, n) {
            var e = this;
            n && n.length
              ? n.forEach(function (n) {
                  return e.__invalidateChild(t, n);
                })
              : (this.__invalidate(t), this.__emitChange());
          }),
          n
        );
      })(r("AdsBaseListStore_LEGACY")),
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
