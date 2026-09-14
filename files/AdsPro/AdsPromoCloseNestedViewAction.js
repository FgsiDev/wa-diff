__d(
  "AdsPromoCloseNestedViewAction",
  [
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesNestedViewLayoutReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsConnectedSourcesNestedViewLayoutReducerPlugins")
              .onPromoAdsModuleNestedViewClose,
            n("AdsConnectedSourcesDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPromoCloseNestedViewActionPlugin",
    );
    a.exports = e;
  },
  null,
);
