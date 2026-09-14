__d(
  "AdsTargetFrequencyBulkEditClearPredictionIdsAction",
  [
    "AdsTargetFrequencyBulkEditClearPredictionIdsReducerPlugin",
    "AdsTargetFrequencyBulkEditPredictionIdProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsTargetFrequencyBulkEditClearPredictionIdsReducerPlugin"),
            n("AdsTargetFrequencyBulkEditPredictionIdProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsTargetFrequencyBulkEditClearPredictionIdsActionPlugin",
    );
    a.exports = e;
  },
  null,
);
