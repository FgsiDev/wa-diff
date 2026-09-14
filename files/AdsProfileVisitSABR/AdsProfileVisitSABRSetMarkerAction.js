__d(
  "AdsProfileVisitSABRSetMarkerAction",
  [
    "AdsProfileVisitSABRDefaultedCampaignsProvider",
    "AdsProfileVisitSABRDefaultedCampaignsReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsProfileVisitSABRDefaultedCampaignsReducerPlugin"),
            n("AdsProfileVisitSABRDefaultedCampaignsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_PROFILE_VISIT_SABR_SET_MARKER_ACTION",
    );
    a.exports = e;
  },
  null,
);
