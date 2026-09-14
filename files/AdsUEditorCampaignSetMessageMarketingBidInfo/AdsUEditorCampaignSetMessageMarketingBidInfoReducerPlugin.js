__d(
  "AdsUEditorCampaignSetMessageMarketingBidInfoReducerPlugin",
  [
    "AdsAPIBidStrategies",
    "AdsCampaignRecordAccessors",
    "AdsCostStrategyUtils",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetMessageMarketingBidInfoActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            if (t.campaignIDs.length === 0) return e;
            var n =
                t.bidAmount == null
                  ? r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP
                  : r("AdsAPIBidStrategies").LOWEST_COST_WITH_BID_CAP,
              a = o(
                "AdsCostStrategyUtils",
              ).getBidLegacyFieldsValueByBidStrategy(n),
              i = a.MappedIsAutobid,
              l = a.MappedIsAveragePricePacing;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var a;
              return o("AdsMutators").chain(
                (a = r("AdsCampaignRecordAccessors")).bid_strategy.set(n),
                a.bid_amount.set(t.bidAmount),
                a.is_autobid.set(i),
                a.is_average_price_pacing.set(l),
              )(e);
            });
          },
          [
            r("AdsUEditorCampaignSetMessageMarketingBidInfoActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
