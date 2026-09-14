__d(
  "AdsConnectedSourcesModalSaveStateAction",
  [
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesLayoutReducerPlugins",
    "AdsConnectedSourcesWebsiteLoggerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsConnectedSourcesLayoutReducerPlugins")
              .onConnectedSourcesModalSaveState,
            n("AdsConnectedSourcesDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [
          n("Laminar").__createLogger(
            "AdsConnectedSourcesWebsiteLoggerPlugins.AdsConnectedSourcesModalSaveSiteLinksLoggerPlugin",
            n("AdsConnectedSourcesWebsiteLoggerPlugins")
              .AdsConnectedSourcesModalSaveSiteLinksLoggerPlugin,
            {},
          ),
        ];
      },
      "AdsConnectedSourcesModalSaveStateActionPlugin",
    );
    a.exports = e;
  },
  null,
);
