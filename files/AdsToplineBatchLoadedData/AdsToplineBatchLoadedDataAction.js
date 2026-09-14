__d(
  "AdsToplineBatchLoadedDataAction",
  ["AdsToplineBatchLoadedDataReducerPlugin", "AdsToplineProvider", "Laminar"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsToplineBatchLoadedDataReducerPlugin"),
            n("AdsToplineProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "TOPLINE.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
