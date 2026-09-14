__d(
  "AdsCategoryAssetUpdatedAction",
  [
    "CategoryAdsSavedConfirmationNuxVisibilityDataProvider",
    "CategoryAdsShowSavedConfirmationNuxReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("CategoryAdsShowSavedConfirmationNuxReducerPlugin"),
            n("CategoryAdsSavedConfirmationNuxVisibilityDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "CATEGORY_ASSET.UPDATED",
    );
    a.exports = e;
  },
  null,
);
