__d(
  "AdsPECreateStartQuickCreateAction",
  [
    "AdsCFReceiptDialogDefaultEngagementCampaignReducerPlugin",
    "AdsCFReceiptDialogUIDataProvider",
    "AdsPECreateStartQuickCreateReducerPlugin",
    "AdsPECreationUIProvider",
    "AdsReachFrequencyCreationFlowProvider",
    "AdsReachFrequencyCurrentCampaignIDProvider",
    "AdsReachFrequencyRevampCreationFlowReducerPlugins",
    "AdsReachFrequencyRevampCurrentCampaignIDReducerPlugins",
    "AdsUserSettingsAdsPECreateStartQuickCreateReducerPlugin",
    "AdsUserSettingsProvider",
    "Laminar",
    "ifRequired_FOR_LAMINAR_CODEGEN",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCFReceiptDialogDefaultEngagementCampaignReducerPlugin"),
            n("AdsCFReceiptDialogUIDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPECreateStartQuickCreateReducerPlugin"),
            n("AdsPECreationUIProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsReachFrequencyRevampCreationFlowReducerPlugins")
              .adsPECreateStackQuickCreateFlow,
            n("AdsReachFrequencyCreationFlowProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsReachFrequencyRevampCurrentCampaignIDReducerPlugins")
              .createStartQuickCreate,
            n("AdsReachFrequencyCurrentCampaignIDProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUserSettingsAdsPECreateStartQuickCreateReducerPlugin"),
            n("AdsUserSettingsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsLoadQuickCreationLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsLoadQuickCreationLoggerPlugin",
                e,
                {},
                ["AdsPEInitializersRegistry"],
              );
            },
          ),
          n("ifRequired_FOR_LAMINAR_CODEGEN")(
            "AdsPECreateStartQuickCreateActionLoggerPlugin",
            function (e) {
              return n("Laminar").__createLogger(
                "AdsPECreateStartQuickCreateActionLoggerPlugin",
                e,
                {},
                ["AdsMgmtRegistry"],
              );
            },
          ),
        ];
      },
      "PowerEditor.CREATE.START_QUICK_CREATE",
    );
    a.exports = e;
  },
  null,
);
