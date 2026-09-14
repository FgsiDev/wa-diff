__d(
  "AdsOutcomeCampaignSelectVideoPromotedObjectTypeDataAction",
  [
    "AdsCFCampaignProvider",
    "AdsOutcomeCampaignSelectVideoPromotedObjectTypeReducerPlugin",
    "AdsPromotedObjectTypeUIProvider",
    "AdsPromotedObjectTypeUISetObjectTypeForCampaignIDsReducerPlugins",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsOutcomeAdgroupSelectVideoReducerPlugin",
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
            n("AdsOutcomeCampaignSelectVideoPromotedObjectTypeReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n(
              "AdsPromotedObjectTypeUISetObjectTypeForCampaignIDsReducerPlugins",
            ).AdsCampaignSelectVideoPromotedObjectTypeDataReducerPlugin,
            n("AdsPromotedObjectTypeUIProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ADS_OUTCOME_CAMPAIGN_EDITOR_SELECT_VIDEO_PROMOTED_OBJECT_TYPE",
    );
    a.exports = e;
  },
  null,
);
