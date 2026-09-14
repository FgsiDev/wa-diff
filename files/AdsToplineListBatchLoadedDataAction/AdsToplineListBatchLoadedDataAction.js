__d(
  "AdsToplineListBatchLoadedDataAction",
  [
    "AdsToplineListBatchLoadedDataReducerPlugin",
    "AdsToplineProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsToplineListBatchLoadedDataReducerPlugin"),
            n("AdsToplineProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "TOP_LINE.LIST.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
