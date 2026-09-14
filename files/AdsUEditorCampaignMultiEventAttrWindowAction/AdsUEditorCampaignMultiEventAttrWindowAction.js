__d(
  "AdsUEditorCampaignMultiEventAttrWindowAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignMultiEventAttrWindowReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignMultiEventAttrWindowReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_MULTI_EVENT_ATTR_WINDOW",
    );
    a.exports = e;
  },
  null,
);
