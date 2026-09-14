__d(
  "AdsUEditorCampaignDeliveryChangeAttributionTypeAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignDeliveryChangeAttributionTypeReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignDeliveryChangeAttributionTypeReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_UI_EDITOR_CAMPAIGN_DELIVERY_CHANGE_ATTRIBUTION_TYPE",
    );
    a.exports = e;
  },
  null,
);
