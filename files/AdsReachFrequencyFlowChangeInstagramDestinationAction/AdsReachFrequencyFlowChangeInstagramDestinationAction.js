__d(
  "AdsReachFrequencyFlowChangeInstagramDestinationAction",
  [
    "AdsReservationPredictionObjectStorySpecProvider",
    "AdsReservationPredictionObjectStorySpecReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsReservationPredictionObjectStorySpecReducerPlugin"),
            n("AdsReservationPredictionObjectStorySpecProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsReachFrequencyFlow.CHANGE_INSTAGRAM_DESTINATION",
    );
    a.exports = e;
  },
  null,
);
