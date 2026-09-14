__d(
  "AdsCampaignGroupDraftFragmentReducer",
  [
    "AdAsyncRequestStatus",
    "AdsAPICampaignGroupPaths",
    "AdsApplicationUtils",
    "AdsCampaignGroupBudgetCleanupBatchMutationFragmentsDataAction",
    "AdsCampaignGroupBudgetCleanupBatchMutationFragmentsDataActionFlux",
    "AdsCampaignGroupCombinedStore",
    "AdsDeleteAdObjectsDataActionFlux",
    "AdsDraftDraftFragmentBatchLoadedDataActionFlux",
    "AdsDraftDraftFragmentBatchUpdatedDataActionFlux",
    "AdsDraftDraftFragmentListPartialLoadDataActionFlux",
    "AdsDraftFragmentStoreStateApplyChangesMutators",
    "AdsDraftFragmentStoreStateDeleteRevertMutators",
    "AdsDraftFragmentStoreStateReducers",
    "AdsDraftFragmentStoreStateUtils",
    "AdsDraftFragmentValidationProvider",
    "AdsDraftSetAppIDDataActionFlux",
    "AdsMutators",
    "AdsRevertAdObjectsDataActionFlux",
    "AdsRevertSelectedAdObjectsDataActionFlux",
    "AdsUEditorCampaignGroupReducerPlugins",
    "adsCampaignGroupBudgetCleanupBatchMutationFailure",
    "adsCampaignGroupBudgetGetToggleActionTypeForPublish",
    "adsCampaignGroupDraftFragmentCreateReducer",
    "adsConvertAdObjectRecordToPlainJS",
    "adsDraftIsApplicationIDPowerEditor",
    "adsMgmtCampaignGroupSelectedIdsByLevelSelector",
    "promiseDone",
    "promiseStoreGet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (r("adsDraftIsApplicationIDPowerEditor")(t)) {
        var n = e.reduce(function (e, t) {
          return (t.ad_object_type === "campaign" && e.push(t.ad_object_id), e);
        }, []);
        n.length > 0 &&
          r("promiseDone")(
            r("promiseStoreGet").all(
              r("AdsCampaignGroupCombinedStore"),
              function () {
                return r("AdsCampaignGroupCombinedStore").getAllObjects(n);
              },
            ),
            function (e) {
              r(
                "AdsCampaignGroupBudgetCleanupBatchMutationFragmentsDataAction",
              ).dispatch(
                { campaignGroupIDs: Array.from(e.keys()) },
                {
                  line: "96",
                  module: "AdsCampaignGroupDraftFragmentReducer.js",
                  moduleID: i.id,
                },
              );
            },
          );
      }
    }
    function s(e, t) {
      if (o("AdsApplicationUtils").isCreativeStudio()) return e;
      var n = o("AdsDraftFragmentStoreStateUtils").getAll(e, t),
        a = new Map();
      for (var i of n) {
        var l,
          s = i[0],
          u = i[1],
          c = u.getValueEnforcing(),
          d =
            r("AdsDraftFragmentValidationProvider") != null
              ? (l = r("AdsDraftFragmentValidationProvider")().get(s)) == null
                ? void 0
                : l.active_errors
              : c.activeErrors;
        c.objectType === "campaign" &&
          c.publishStatus !== r("AdAsyncRequestStatus").IN_PROGRESS &&
          (c.publishError || d) &&
          a.set(s, c);
      }
      var m = Array.from(a.keys()),
        p = r("AdsCampaignGroupCombinedStore").getAllRecords(m),
        _ = o("AdsMutators").mutateEach(p, m, function (t) {
          var n = t.id,
            a = o("AdsDraftFragmentStoreStateUtils").getLiveStore(e).get(n),
            i = r("adsCampaignGroupBudgetGetToggleActionTypeForPublish")(
              r("adsConvertAdObjectRecordToPlainJS")(t),
              a,
            );
          return r("adsCampaignGroupBudgetCleanupBatchMutationFailure")(t, i);
        });
      return o(
        "AdsDraftFragmentStoreStateApplyChangesMutators",
      ).applyChangesFromAdObjectsMutation(e, p, _);
    }
    function u(t, n) {
      switch (n.actionType) {
        case o("AdsDeleteAdObjectsDataActionFlux").actionType:
          n.campaignGroupIDs &&
            n.campaignGroupIDs.length > 0 &&
            (t = o("AdsDraftFragmentStoreStateDeleteRevertMutators").delete_(
              t,
              n.campaignGroupIDs,
              r("AdsAPICampaignGroupPaths").STATUS,
              n.campaignGroupSyncBypass === !0,
            ));
          break;
        case o("AdsRevertAdObjectsDataActionFlux").actionType:
          n.campaignGroupIDs &&
            n.campaignGroupIDs.length > 0 &&
            (t = o("AdsDraftFragmentStoreStateDeleteRevertMutators").revert(
              t,
              n.campaignGroupIDs,
              r("AdsAPICampaignGroupPaths").STATUS,
            ));
          break;
        case o("AdsRevertSelectedAdObjectsDataActionFlux").actionType:
          var a = r("adsMgmtCampaignGroupSelectedIdsByLevelSelector")();
          a &&
            a.length > 0 &&
            (t = o("AdsDraftFragmentStoreStateDeleteRevertMutators").revert(
              t,
              a,
              r("AdsAPICampaignGroupPaths").STATUS,
            ));
          break;
        case o("AdsDraftDraftFragmentBatchLoadedDataActionFlux").actionType:
          e(Array.from(n.fragments.values()), void 0);
          break;
        case o("AdsDraftDraftFragmentBatchUpdatedDataActionFlux").actionType:
          e(Array.from(n.fragments.values()), n.adsApplicationID);
          break;
        case o("AdsDraftDraftFragmentListPartialLoadDataActionFlux").actionType:
          e(n.fragments, n.adsApplicationID);
          break;
        case o(
          "AdsCampaignGroupBudgetCleanupBatchMutationFragmentsDataActionFlux",
        ).actionType:
          t = s(t, n.campaignGroupIDs);
          break;
      }
      return t;
    }
    var c = r("adsCampaignGroupDraftFragmentCreateReducer")(
      function (e, t) {
        return o(
          "AdsDraftFragmentStoreStateReducers",
        ).draftFragmentStateReducer(e, { action: t });
      },
      function (e) {
        return e;
      },
      function (e, t) {
        return r("AdsUEditorCampaignGroupReducerPlugins").reduce(function (
          e,
          n,
        ) {
          return n.reduce.editingReducer(e, t);
        }, e);
      },
      function (e, t) {
        return u(e, t);
      },
    );
    function d(e, t) {
      return t.action.type === o("AdsDraftSetAppIDDataActionFlux").actionType
        ? e.set("adsApplicationID", t.action.appID)
        : c(e, t.action);
    }
    l.default = d;
  },
  98,
);
