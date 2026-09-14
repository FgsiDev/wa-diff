__d(
  "AdsUEditorCampaignReachFrequencyFlowSetPredictionIdReducerPlugin",
  [
    "AdsAuctionFrequencyControlProvider",
    "AdsBuyingTypes",
    "AdsCampaignRecordAccessors",
    "AdsFrequencyControlEditorConstants",
    "AdsMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReachFrequencyFlowSetPredictionIdActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            auctionOptionsIndex: r(
              "AdsAuctionFrequencyControlProvider",
            ).toFluxSelector(),
            buyingTypes: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getBuyingType,
            ),
          },
          function (e, t, n) {
            var a = n.auctionOptionsIndex,
              i = n.buyingTypes;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                return i.get(n) === r("AdsBuyingTypes").RESERVED ||
                  (i.get(n) === r("AdsBuyingTypes").AUCTION &&
                    a.get(n) ===
                      o("AdsFrequencyControlEditorConstants")
                        .TARGET_FREQUENCY_SELECTOR_OPTION_INDEX)
                  ? r("AdsCampaignRecordAccessors").rf_prediction_id.set(
                      t.predictionID,
                      e,
                    )
                  : e;
              },
            );
          },
          o("AdsUEditorCampaignReachFrequencyFlowSetPredictionIdActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
