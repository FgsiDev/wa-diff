__d(
  "AdsBlendedAdsCreationDefaultingStickyOptUpdateAction",
  [
    "AdsBlendedAdsCreationDefaultingStickyOptUpdateReducerPlugin",
    "AdsBlendedAdsStatusTrackerDataProvider",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsBlendedAdsCreationDefaultingStickyOptUpdateReducerPlugin"),
            n("AdsBlendedAdsStatusTrackerDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "BLENDED_ADS.CREATION_DEFAULTION_STICKY_OPT_UPDATE",
    );
    a.exports = e;
  },
  null,
);
