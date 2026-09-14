__d(
  "AdsPESettingsFilterLoadedAction",
  [
    "AdsPEFilterUIStateProvider",
    "AdsPESettingsFilterLoadedReducerPlugin",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsPESettingsFilterLoadedReducerPlugin"),
            n("AdsPEFilterUIStateProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "PowerEditor.SETTINGS.FILTER_LOADED",
    );
    a.exports = e;
  },
  null,
);
