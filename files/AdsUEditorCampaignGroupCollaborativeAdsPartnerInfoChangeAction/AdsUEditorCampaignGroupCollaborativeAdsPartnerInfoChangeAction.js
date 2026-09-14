__d(
  "AdsUEditorCampaignGroupCollaborativeAdsPartnerInfoChangeAction",
  [
    "AdsCPASCampaignPartnerEventSourcesStateDataProvider",
    "AdsCPASPartnerInfoEventSourcesStateReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCPASPartnerInfoEventSourcesStateReducerPlugin"),
            n("AdsCPASCampaignPartnerEventSourcesStateDataProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorCampaignGroupCollaborativeAdsPartnerInfoChangeReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFCampaignGroupRecordProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsPECampaignGroupCollaborativeAdsPartnerInfoChangeActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsPECampaignGroupCollaborativeAdsPartnerInfoChangeActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "ADS_CAMPAIGN_GROUP_EDITOR_COLLABORATIVE_ADS_PARTNER_INFO_CHANGE",
    );
    a.exports = e;
  },
  null,
);
