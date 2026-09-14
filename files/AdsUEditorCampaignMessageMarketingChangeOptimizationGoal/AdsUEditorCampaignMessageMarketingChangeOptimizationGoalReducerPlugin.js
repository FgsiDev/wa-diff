__d(
  "AdsUEditorCampaignMessageMarketingChangeOptimizationGoalReducerPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsCampaignRecordAccessors",
    "AdsCostStrategyUtils",
    "AdsMutators",
    "AdsUEditorCampaignMessageMarketingChangeOptimizationGoalActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n =
                e.bid_strategy ===
                  r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP ||
                e.bid_strategy === r("AdsAPIBidStrategies").TARGET_COST ||
                e.bid_strategy === r("AdsAPIBidStrategies").COST_CAP;
              if (n) {
                var a,
                  i = o(
                    "AdsCostStrategyUtils",
                  ).getBidLegacyFieldsValueByBidStrategy(
                    r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
                  ),
                  l = i.MappedIsAutobid,
                  s = i.MappedIsAveragePricePacing;
                return o("AdsMutators").chain(
                  (a = r("AdsCampaignRecordAccessors")).bid_amount.set(null),
                  a.bid_strategy.set(
                    r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP,
                  ),
                  a.is_autobid.set(l),
                  a.is_average_price_pacing.set(s),
                  a.optimization_goal.set(t.optimizationGoal),
                )(e);
              } else
                return r("AdsCampaignRecordAccessors").optimization_goal.set(
                  t.optimizationGoal,
                  e,
                );
            });
          },
          r(
            "AdsUEditorCampaignMessageMarketingChangeOptimizationGoalActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
