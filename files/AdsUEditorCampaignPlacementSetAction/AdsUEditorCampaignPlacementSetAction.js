__d(
  "AdsUEditorCampaignPlacementSetAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignPlacementSetReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignPlacementSetReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_PLACEMENT.SET",
    );
    a.exports = e;
  },
  null,
);
