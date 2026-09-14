__d(
  "AdsUEditorCampaignSetNameAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignSetNameReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignSetNameReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_SET_NAME",
    );
    a.exports = e;
  },
  null,
);
