__d(
  "AdsUEditorCampaignCPASBudgetDefaultsAction",
  [
    "AdsCFCampaignProvider",
    "AdsUEditorCampaignCPASBudgetDefaultsReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignCPASBudgetDefaultsReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorCampaignGroupCPASBudgetDefaultsReducerPlugin",
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
        return [];
      },
      "ADS_CAMPAIGN_EDITOR_CPAS_BUDGET_DEFAULTS",
    );
    a.exports = e;
  },
  null,
);
