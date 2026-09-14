__d(
  "AdsCampaignStructureInitCreationAction",
  [
    "AdsAdgroupReelsPCDataProvider",
    "AdsCampaignStructureCreationLoadingUIDataProvider",
    "AdsCampaignStructureCreationLoadingUIReducerPlugin",
    "AdsDraftCreationLoggerPlugins",
    "AdsUEditorAdgroupReelsPCReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsCampaignStructureCreationLoadingUIReducerPlugin"),
            n("AdsCampaignStructureCreationLoadingUIDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorAdgroupReelsPCReducerPlugin"),
            n("AdsAdgroupReelsPCDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsDraftCreationLoggerPlugins.AdsInstantDraftCreationStartLoggerPlugin",
            n("AdsDraftCreationLoggerPlugins")
              .AdsInstantDraftCreationStartLoggerPlugin,
            {},
          ),
        ];
      },
      "INIT_CREATION_FROM_TREE",
    );
    a.exports = e;
  },
  null,
);
