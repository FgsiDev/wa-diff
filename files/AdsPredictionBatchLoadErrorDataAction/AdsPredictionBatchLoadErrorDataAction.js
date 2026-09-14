__d(
  "AdsPredictionBatchLoadErrorDataAction",
  [
    "AdsPredictionBatchLoadErrorDataReducerPlugin",
    "AdsPredictionProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPredictionBatchLoadErrorDataReducerPlugin"),
            n("AdsPredictionProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PREDICTION.BATCH_LOAD_ERROR",
    );
    a.exports = e;
  },
  null,
);
