__d(
  "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataAction",
  [
    "AdsCFCampaignProvider",
    "AdsPromotedObjectTypeUIProvider",
    "AdsPromotedObjectTypeUISetObjectTypeForCampaignIDsReducerPlugins",
    "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n(
              "AdsPromotedObjectTypeUISetObjectTypeForCampaignIDsReducerPlugins",
            )
              .AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionPlugin,
            n("AdsPromotedObjectTypeUIProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupSelectLiveVideoPromotedObjectTypeReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeReducerPlugin",
            ),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsUEditorCampaignSelectLiveVideoPromotedObjectTypeDataActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "ADS_CAMPAIGN_EDITOR_SELECT_LIVE_VIDEO_PROMOTED_OBJECT_TYPE",
    );
    a.exports = e;
  },
  null,
);
