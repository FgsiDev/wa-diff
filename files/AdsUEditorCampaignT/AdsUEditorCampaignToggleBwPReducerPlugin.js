__d(
  "AdsUEditorCampaignToggleBwPReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsBwIUtils",
    "AdsBwPCampaignMutationUtils",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignGroupRecordAccessors",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorBwIToggleActionFlux",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignGroupsByID: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.mapTransform(
              r("emptyFunction").thatReturnsArgument,
            ),
            account: r("adsUEditorAccountSelector"),
            eligibilityInformationMap: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationMap,
            getIsNewCampaignGroup: r("AdsCampaignGroupDraftFragmentStore")
              .getIsNewSelector,
          },
          function (e, t, n) {
            var a = n.account,
              i = n.campaignGroupsByID,
              l = n.eligibilityInformationMap,
              s = n.getIsNewCampaignGroup;
            return t.enabled
              ? o("AdsMutators").mutateEach(e, t.campaignIDs, function (e, t) {
                  var n = l.get(t),
                    u = r("AdsCampaignRecordAccessors").campaign_id.get(e),
                    c = i.get(u),
                    d = s(u);
                  if (
                    c == null ||
                    n == null ||
                    !o("AdsBwIUtils").isBwICampaignGroup(c) ||
                    !d
                  )
                    return e;
                  var m = r("AdsCampaignGroupRecordAccessors").objective.get(c);
                  return m === r("AdsAPIObjectives").OUTCOME_SALES
                    ? o("AdsBwPCampaignMutationUtils").enableBwPForSales(
                        e,
                        c,
                        a,
                        n,
                      )
                    : o("AdsBwPCampaignMutationUtils").enableBwPForTraffic(
                        e,
                        c,
                        a,
                        n,
                      );
                })
              : e;
          },
          r("AdsUEditorBwIToggleActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
