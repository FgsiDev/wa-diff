__d(
  "AdsReachFrequencyFlowGetPredictionSuccessAction",
  [
    "AdsReachFrequencyInsteamPlacementVideoRequirementsDialogShownProvider",
    "AdsReachFrequencyInsteamPlacementVideoRequirementsDialogShownReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsReachFrequencyInsteamPlacementVideoRequirementsDialogShownReducerPlugins",
            ).isInstreamSelected,
            n(
              "AdsReachFrequencyInsteamPlacementVideoRequirementsDialogShownProvider",
            ),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsReachFrequencyFlow.GET_PREDICTION_SUCCESS",
    );
    a.exports = e;
  },
  null,
);
