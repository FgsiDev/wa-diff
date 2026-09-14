__d(
  "AdsPromotableBusinessInstagramAccountsWithIABPBatchLoadedDataAction",
  [
    "AdsPromotableBusinessInstagramAccountsWithIABPBatchLoadedReducerPlugin",
    "AdsPromotableBusinessInstagramAccountsWithIABPProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsPromotableBusinessInstagramAccountsWithIABPBatchLoadedReducerPlugin",
            ),
            n("AdsPromotableBusinessInstagramAccountsWithIABPProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPromotableBusinessInstagramAccountsWithIABP.BATCH_LOADED",
    );
    a.exports = e;
  },
  null,
);
