__d(
  "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationDataAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupSelectUnifiedProfileVisitsDestinationReducerPlugin",
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
              "AdsUEditorCampaignSelectUnifiedProfileVisitsDestinationReducerPlugin",
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
      "ADS_CAMPAIGN_EDITOR_SELECT_UNIFIED_PROFILE_VISITS_DESTINATION",
    );
    a.exports = e;
  },
  null,
);
