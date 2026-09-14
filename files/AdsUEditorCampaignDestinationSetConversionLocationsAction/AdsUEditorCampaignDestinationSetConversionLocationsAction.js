__d(
  "AdsUEditorCampaignDestinationSetConversionLocationsAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignDestinationSetConversionLocationsReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignDestinationSetConversionLocationsReducerPlugin",
            ),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignDestinationSetConversionLocationsActionPlugin",
    );
    a.exports = e;
  },
  null,
);
