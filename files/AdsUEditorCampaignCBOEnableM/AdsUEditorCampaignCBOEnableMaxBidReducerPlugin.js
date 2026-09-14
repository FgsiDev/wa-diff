__d(
  "AdsUEditorCampaignCBOEnableMaxBidReducerPlugin",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignGroupEnableMaxBidActionFlux",
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
                        ).maybeResetOptimizationGoal(a, n, e);
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
                        ).resetAttributionSpec(a, n, e);
                      },
                      r("AdsCampaignRecordAccessors").bid_constraints.delete,
                      function (e) {
                        return o(
                          "AdsCampaignGroupBudgetMutationUtils",
                        ).setDefaultBidAmount(a, n, e);
                      },
                      r("AdsCampaignRecordAccessors").cost_bidding_mode.delete,
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
                    )(e);
              },
            );
          },
          o("AdsUEditorCampaignGroupEnableMaxBidActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
