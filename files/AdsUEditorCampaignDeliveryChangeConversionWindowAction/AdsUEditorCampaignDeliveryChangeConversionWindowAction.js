__d(
  "AdsUEditorCampaignDeliveryChangeConversionWindowAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignDeliveryChangeConversionWindowReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignDeliveryChangeConversionWindowReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_DELIVERY_CHANGE_CONVERSION_WINDOW",
    );
    a.exports = e;
  },
  null,
);
