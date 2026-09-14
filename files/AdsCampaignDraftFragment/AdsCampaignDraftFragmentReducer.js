__d(
  "AdsCampaignDraftFragmentReducer",
  [
    "AdsAPICampaignPaths",
    "AdsApplicationUtils",
    "AdsCampaignPlacementMutators",
    "AdsCampaignStoreSetters",
    "AdsCopyCopyCompletedDataActionFlux",
    "AdsDeleteAdObjectsDataActionFlux",
    "AdsDraftFragmentStoreStateApplyChangesMutators",
    "AdsDraftFragmentStoreStateDeleteRevertMutators",
    "AdsDraftFragmentStoreStateReducers",
    "AdsDraftSetAppIDDataActionFlux",
    "AdsEditorActionUtils",
    "AdsPECampaignRawCombinedTableStore",
    "AdsPEPrefetchedIDsActionFlux",
    "AdsPayloadUtils",
    "AdsRevertAdObjectsDataActionFlux",
    "AdsRevertSelectedAdObjectsDataActionFlux",
    "QPLDraftFragmentMutationLogger",
    "QuickPerformanceLogger",
    "adsGetUEditorCampaignReducerPlugins",
    "adsMgmtCampaignSelectedIdsByLevelSelector",
    "cr:7051",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("AdsCampaignStoreSetters"))();
    function u(e, t) {
      if (o("AdsApplicationUtils").isCreativeStudio()) return e;
      var a = o("AdsPayloadUtils").getCampaignIDsFromPayload_DO_NOT_USE(t),
        l = a.filter(function (e) {
          var t = r("AdsPECampaignRawCombinedTableStore").getCachedObject(e);
          return t && t.isDone() && t.hasValue();
        });
      if (l.length === 0) return e;
      var s = r("AdsPECampaignRawCombinedTableStore").getAllRecords(l),
        u = r("AdsCampaignPlacementMutators").reduce(function (e, n) {
          return n.reduce(e, t);
        }, s);
      return (
        (u = r("adsGetUEditorCampaignReducerPlugins")().reduce(function (e, r) {
          var o = r.reduce.editingReducer(e, t.action);
          return (
            o !== e &&
              (n("cr:7051") == null ||
                n("cr:7051").logFirstAction(
                  i.id,
                  t.action.actionType,
                  r.reduce.name,
                )),
            o
          );
        }, u)),
        o(
          "AdsDraftFragmentStoreStateApplyChangesMutators",
        ).applyChangesFromAdObjectsMutation(e, s, u)
      );
    }
    function c(t, n) {
      var a = t,
        i = n.action;
      o("QPLDraftFragmentMutationLogger").markerStart();
      var l = (e || (e = r("QuickPerformanceLogger"))).currentTimestamp();
      if (n.action.type === o("AdsDraftSetAppIDDataActionFlux").actionType) {
        var c = a.set("adsApplicationID", n.action.appID);
        return (
          o(
            "QPLDraftFragmentMutationLogger",
          ).qplDraftSyncEmitPointMutateCampaign(n.action.type, l, !0),
          c
        );
      }
      if (
        (i && i.type === o("AdsPEPrefetchedIDsActionFlux").actionType) ||
        o("AdsEditorActionUtils").isNotAMEditorAction(i)
      )
        return (
          o(
            "QPLDraftFragmentMutationLogger",
          ).qplDraftSyncEmitPointMutateCampaign(n.action.type, l, !1),
          a
        );
      a = o("AdsDraftFragmentStoreStateReducers").draftFragmentStateReducer(
        a,
        n,
      );
      var d = function (t, n, r) {
        a = o("AdsDraftFragmentStoreStateApplyChangesMutators").setPath(
          a,
          t,
          n,
          r,
        );
      };
      switch ((s.handleDispatch(n, d), (a = u(a, n)), i.actionType)) {
        case o("AdsDeleteAdObjectsDataActionFlux").actionType:
          i.campaignIDs &&
            i.campaignIDs.length > 0 &&
            (a = o("AdsDraftFragmentStoreStateDeleteRevertMutators").delete_(
              a,
              i.campaignIDs,
              r("AdsAPICampaignPaths").STATUS,
              i.campaignSyncBypass === !0,
            ));
          break;
        case o("AdsRevertAdObjectsDataActionFlux").actionType:
          i.campaignIDs &&
            i.campaignIDs.length > 0 &&
            (a = o("AdsDraftFragmentStoreStateDeleteRevertMutators").revert(
              a,
              i.campaignIDs,
              r("AdsAPICampaignPaths").STATUS,
            ));
          break;
        case o("AdsRevertSelectedAdObjectsDataActionFlux").actionType:
          var m = r("adsMgmtCampaignSelectedIdsByLevelSelector")();
          m &&
            m.length > 0 &&
            (a = o("AdsDraftFragmentStoreStateDeleteRevertMutators").revert(
              a,
              m,
              r("AdsAPICampaignPaths").STATUS,
            ));
          break;
        case o("AdsCopyCopyCompletedDataActionFlux").actionType:
          break;
      }
      return (
        o("QPLDraftFragmentMutationLogger").qplDraftSyncEmitPointMutateCampaign(
          n.action.actionType,
          l,
          t !== a,
        ),
        a
      );
    }
    l.default = c;
  },
  98,
);
