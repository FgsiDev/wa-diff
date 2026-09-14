__d(
  "AdsUEditorCampaignCBOEnableMinRoasReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupEnableMinRoasActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignIDToCampaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.campaignIDToCampaignGroupMap;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, t) {
                var n = i.get(t);
                return n == null
                  ? e
                  : o("AdsMutators").chain(
                      function (e) {
                        return o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).setValueOptimizationForAppInstallCampaign(n, e);
                      },
                      function (e) {
                        return o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).maybeResetBillingEvent(n, e, a);
                      },
                      function (e) {
                        return o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).maybeResetFrequencyControlSpecs(a, n, e);
                      },
                      function (e) {
                        return o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).setDefaultMinRoasBidConstraints(e);
                      },
                      function (e) {
                        return o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).resetAttributionSpec(a, n, e);
                      },
                      function (e) {
                        return o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).maybeClearValueAdjustmentRuleCollectionID(n, e);
                      },
                      function (e) {
                        return o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).maybeResetStandardAttributionType(n, e);
                      },
                      r("AdsCampaignRecordAccessors").bid_amount.delete,
                      r("AdsCampaignRecordAccessors").cost_bidding_mode.delete,
                    )(e);
              },
            );
          },
          o("AdsUEditorCampaignGroupEnableMinRoasActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
