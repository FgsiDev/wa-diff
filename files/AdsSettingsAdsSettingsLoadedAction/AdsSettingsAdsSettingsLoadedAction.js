__d(
  "AdsSettingsAdsSettingsLoadedAction",
  [
    "AdsPinnedRowsProvider",
    "AdsSettingsAdsSettingsLoadedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsSettingsAdsSettingsLoadedReducerPlugin"),
            n("AdsPinnedRowsProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "ads_settings_loaded",
    );
    a.exports = e;
  },
  null,
);
