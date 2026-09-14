__d(
  "AdsUEditorCampaignDeliveryChangeBudgetModeAction",
  [
    "AdsCFCampaignProvider",
    "AdsPackageDuplicationUpgradeEditorMessagesProvider",
    "AdsPackageDuplicationUpgradeEditorMessagesReducerPlugins",
    "AdsUEditorCampaignDeliveryChangeBudgetModeReducerPlugin",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPackageDuplicationUpgradeEditorMessagesReducerPlugins")
              .AdsPackageDuplicationUpgradeDismissCampaignBudgetSectionMessageReducerPlugin,
            n("AdsPackageDuplicationUpgradeEditorMessagesProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorCampaignDeliveryChangeBudgetModeReducerPlugin"),
            n("AdsCFCampaignProvider"),
            {},
            "",
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsUEditorCampaignGroupDisableBudgetFlexReducerPlugin",
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
      "ADS_CAMPAIGN_EDITOR_DELIVERY_CHANGE_BUDGET_MODE",
    );
    a.exports = e;
  },
  null,
);
