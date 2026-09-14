__d(
  "AdsPredictionBatchLoadedDataAction",
  [
    "AdsCampaignGroupPredictionStatusProviderUpdateOnPredictionLoadReducerPlugin",
    "AdsPredictionBatchLoadedDataReducerPlugin",
    "AdsPredictionProvider",
    "AdsPredictionStatusProviderUpdateOnPredictionLoadReducerPlugin",
    "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
    "AdsTargetFrequencyInAuctionPredictionStatusProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsCampaignGroupPredictionStatusProviderUpdateOnPredictionLoadReducerPlugin",
            ),
            n(
              "AdsTargetFrequencyInAuctionCampaignGroupPredictionStatusProvider",
            ),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPredictionBatchLoadedDataReducerPlugin"),
            n("AdsPredictionProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPredictionStatusProviderUpdateOnPredictionLoadReducerPlugin"),
            n("AdsTargetFrequencyInAuctionPredictionStatusProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PREDICTION.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
