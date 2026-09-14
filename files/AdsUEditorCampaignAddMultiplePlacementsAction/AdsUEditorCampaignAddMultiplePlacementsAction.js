__d(
  "AdsUEditorCampaignAddMultiplePlacementsAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignAddMultiplePlacementsReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignAddMultiplePlacementsReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorCampaignAddMultiplePlacementsActionPlugin",
    );
    a.exports = e;
  },
  null,
);
