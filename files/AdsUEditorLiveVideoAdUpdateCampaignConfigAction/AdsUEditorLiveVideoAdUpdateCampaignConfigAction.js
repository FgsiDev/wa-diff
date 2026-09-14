__d(
  "AdsUEditorLiveVideoAdUpdateCampaignConfigAction",
  [
    "AdsCFCampaignProvider",
    "AdsLiveVideoAdUpdateCampaignConfigLoggerPlugin",
    "AdsUEditorLiveVideoAdUpdateCampaignConfigReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorLiveVideoAdUpdateCampaignConfigReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsLiveVideoAdUpdateCampaignConfigLoggerPlugin",
            n("AdsLiveVideoAdUpdateCampaignConfigLoggerPlugin"),
            {},
          ),
        ];
      },
      "AdsUEditorLiveVideoAdUpdateCampaignConfigActionPlugin",
    );
    a.exports = e;
  },
  null,
);
