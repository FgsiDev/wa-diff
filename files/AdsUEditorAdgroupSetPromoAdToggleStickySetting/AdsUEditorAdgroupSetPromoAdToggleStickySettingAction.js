__d(
  "AdsUEditorAdgroupSetPromoAdToggleStickySettingAction",
  [
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesLayoutReducerPlugins",
    "AdsPromoAdsAdgroupDefaultOptinStickySettingDataProvider",
    "AdsUEditorAdgroupSetPromoAdToggleStickySettingReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsConnectedSourcesLayoutReducerPlugins").onPromoAdsManualToggle,
            n("AdsConnectedSourcesDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsUEditorAdgroupSetPromoAdToggleStickySettingReducerPlugin"),
            n("AdsPromoAdsAdgroupDefaultOptinStickySettingDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsUEditorAdgroupSetPromoAdToggleStickySettingActionPlugin",
    );
    a.exports = e;
  },
  null,
);
