__d(
  "AdsUEditorPromotedObjectSetLeadAdsOffsiteConversionTypeDataAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorPromotedObjectSetLeadAdsOffsiteConversionTypeReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsUEditorPromotedObjectSetLeadAdsOffsiteConversionTypeReducerPlugin",
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
      "ADS_CAMPAIGN_EDITOR_PROMOTED_OBJECT_SET_LEAD_ADS_OFFSITE_CONVERSION_TYPE",
    );
    a.exports = e;
  },
  null,
);
