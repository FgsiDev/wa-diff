__d(
  "AdsUnificationOSMergedCampaignNUXTourAction",
  [
    "AdsUnificationOSMergedCampaignNUXTourProvider",
    "AdsUnificationOsMergedCampaignNUXTourReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUnificationOsMergedCampaignNUXTourReducerPlugin"),
            n("AdsUnificationOSMergedCampaignNUXTourProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUnificationOSMergedCampaignNuxTourActionPlugin",
    );
    a.exports = e;
  },
  null,
);
