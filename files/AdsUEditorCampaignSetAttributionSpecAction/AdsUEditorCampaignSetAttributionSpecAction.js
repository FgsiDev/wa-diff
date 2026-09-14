__d(
  "AdsUEditorCampaignSetAttributionSpecAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignSetAttributionSpecReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignSetAttributionSpecReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_SET_ATTRIBUTION_SPEC",
    );
    a.exports = e;
  },
  null,
);
