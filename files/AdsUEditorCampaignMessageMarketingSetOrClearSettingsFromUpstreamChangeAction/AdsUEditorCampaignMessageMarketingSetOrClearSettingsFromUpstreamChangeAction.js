__d(
  "AdsUEditorCampaignMessageMarketingSetOrClearSettingsFromUpstreamChangeAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignMessageMarketingUpstreamSettingsChangeReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorAdgroupSAOffDefaultOptinOnOptimizationGoalChangeReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFAdgroupDataProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorCampaignGroupDisabledBudgetFlexOnOptimizationGoalChangeReducerPlugin",
            function (e) {
              return n("ifRequired_FOR_LAMINAR_CODEGEN")(
                "AdsCFCampaignGroupRecordProvider",
                function (t) {
                  return n("Laminar").__createReducer(e, t, {}, "");
                },
              );
            },
          ),
          n("Laminar").__createReducer(
            n(
              "AdsUEditorCampaignMessageMarketingUpstreamSettingsChangeReducerPlugin",
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
      "ADS_CAMPAIGN_EDITOR_MESSAGE_MARKETING_SET_OR_CLEAR_SETTINGS_FROM_UPSTREAM_CHANGE",
    );
    a.exports = e;
  },
  null,
);
