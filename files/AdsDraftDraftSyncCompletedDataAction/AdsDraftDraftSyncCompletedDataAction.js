__d(
  "AdsDraftDraftSyncCompletedDataAction",
  [
    "AdsDraftDraftSyncCompletedDataReducerPlugin",
    "AdsPEEditorPaneSyncStateUIProvider",
    "AdsPreFlightRecommendationHubRequestIDProvider",
    "AdsPreFlightRecommendationHubRequestIDReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftDraftSyncCompletedDataReducerPlugin"),
            n("AdsPEEditorPaneSyncStateUIProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPreFlightRecommendationHubRequestIDReducerPlugin"),
            n("AdsPreFlightRecommendationHubRequestIDProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsDraft.DRAFT.SYNC_COMPLETED",
    );
    a.exports = e;
  },
  null,
);
