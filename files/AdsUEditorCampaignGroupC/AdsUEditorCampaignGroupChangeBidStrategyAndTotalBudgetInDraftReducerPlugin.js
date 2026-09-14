__d(
  "AdsUEditorCampaignGroupChangeBidStrategyAndTotalBudgetInDraftReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux",
    "AdsCampaignGroupBudgetCrossLevelChangeBidStrategyAndTotalBudgetActionFlux",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            (r("vulture")("Kg55IUCC0qwUP7mexsTX1mfxuYk="),
              r("vulture")("fBAyg45TVpfdZ5D4U_0PfaTTB50="));
            var n = t.budgetAmount,
              a = t.budgetMode,
              i = t.campaignGroupIDs,
              l = t.newBidStrategy;
            if (l == null || n == null || a == null) return e;
            var s = String(
              o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(n),
            );
            return o("AdsMutators").mutateEach(
              e,
              i,
              o("AdsMutators").chain(
                r("AdsCampaignGroupRecordAccessors").bid_strategy.set(l),
                a === "daily"
                  ? r("AdsCampaignGroupRecordAccessors").daily_budget.set(s)
                  : r("AdsCampaignGroupRecordAccessors").lifetime_budget.set(s),
              ),
            );
          },
          [
            o(
              "AdsCampaignGroupBudgetCrossLevelChangeBidStrategyAndTotalBudgetActionFlux",
            ).actionType,
            o(
              "AdsCampaignGroupBidStrategyInstantPublishApplyChangesDataActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
