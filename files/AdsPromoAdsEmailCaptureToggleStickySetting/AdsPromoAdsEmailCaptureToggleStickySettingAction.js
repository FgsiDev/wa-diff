__d(
  "AdsPromoAdsEmailCaptureToggleStickySettingAction",
  [
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesLayoutReducerPlugins",
    "AdsPromoAdsEmailCaptureAdgroupDefaultOptinStickySettingDataProvider",
    "AdsPromoAdsEmailCaptureToggleStickySettingReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsConnectedSourcesLayoutReducerPlugins")
              .onEmailCaptureManualToggle,
            n("AdsConnectedSourcesDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPromoAdsEmailCaptureToggleStickySettingReducerPlugin"),
            n(
              "AdsPromoAdsEmailCaptureAdgroupDefaultOptinStickySettingDataProvider",
            ),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPromoAdsEmailCaptureToggleStickySettingActionPlugin",
    );
    a.exports = e;
  },
  null,
);
