__d(
  "AdsBlendedAdsStatusTrackerDataUpdateAction",
  [
    "AdsBlendedAdsStatusTrackerDataProvider",
    "AdsBlendedAdsStatusTrackerDataUpdateReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsBlendedAdsStatusTrackerDataUpdateReducerPlugin"),
            n("AdsBlendedAdsStatusTrackerDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "BLENDED_ADS.STATUS_TRACKER_DATA_UPDATE",
    );
    a.exports = e;
  },
  null,
);
