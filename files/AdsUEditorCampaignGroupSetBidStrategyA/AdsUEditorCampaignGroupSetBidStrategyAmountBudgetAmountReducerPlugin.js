__d(
  "AdsUEditorCampaignGroupSetBidStrategyAmountBudgetAmountReducerPlugin",
  [
    "AdsBudgetScalingMutationUtils",
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupInstantPublishBidStrategyAmountBudgetAmountActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                var n = [],
                  a = t.bidAmount,
                  i = t.campaignBidAmountsOverride,
                  l = t.campaignIDs,
                  s =
                    i != null
                      ? i
                      : a == null
                        ? null
                        : Object.fromEntries(
                            l.map(function (e) {
                              return [e, a];
                            }),
                          );
                s != null &&
                  n.push(
                    r("AdsCampaignGroupRecordAccessors").adset_bid_amounts.set(
                      r("immutable").fromJS(s),
                    ),
                  );
                var u = o("AdsMutators").chain.apply(
                  o("AdsMutators"),
                  n.concat([
                    r("AdsCampaignGroupRecordAccessors").is_autobid.set(!1),
                    r("AdsCampaignGroupRecordAccessors").bid_strategy.set(
                      t.bidStrategy,
                    ),
                    function (e) {
                      return t.dailyBudget != null
                        ? o("AdsMutators").chain(
                            r(
                              "AdsCampaignGroupRecordAccessors",
                            ).daily_budget.set(
                              String(
                                o(
                                  "AdsCampaignBudgetMutationUtils",
                                ).safeRoundForGraphQL(t.dailyBudget),
                              ),
                            ),
                          )(e)
                        : o("AdsMutators").chain(
                            r(
                              "AdsCampaignGroupRecordAccessors",
                            ).lifetime_budget.set(
                              String(
                                o(
                                  "AdsCampaignBudgetMutationUtils",
                                ).safeRoundForGraphQL(t.lifetimeBudget),
                              ),
                            ),
                          )(e);
                    },
                  ]),
                )(e);
                return o(
                  "AdsBudgetScalingMutationUtils",
                ).maybeClearCampaignGroupBudgetScalingForBidStrategy(
                  u,
                  t.bidStrategy,
                );
              },
            );
          },
          [
            r(
              "AdsUEditorCampaignGroupInstantPublishBidStrategyAmountBudgetAmountActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
