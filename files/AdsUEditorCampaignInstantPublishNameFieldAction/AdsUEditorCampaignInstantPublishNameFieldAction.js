__d(
  "AdsUEditorCampaignInstantPublishNameFieldAction",
  [
    "AdsCFCampaignProvider",
    "AdsDraftPublishDataProvider",
    "AdsDraftPublishReducerPlugins",
    "AdsUEditorCampaignSetNameReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsDraftPublishReducerPlugins")
              .CampaignInstantPublishReducerPlugin,
            n("AdsDraftPublishDataProvider"),
            {},
            "",
          ),
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
      "ADS_CAMPAIGN_EDITOR_INSTANT_PUBLISH_NAME",
    );
    a.exports = e;
  },
  null,
);
