__d(
  "AdsSettingsDataDispatcher",
  [
    "AdsSettingsAdsSettingsLoadErrorAction",
    "AdsSettingsAdsSettingsLoadedAction",
    "AdsSettingsAdsSettingsUpdateErrorAction",
    "AdsSettingsAdsSettingsUpdatedAction",
    "AdsSettingsDataLoader",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.loadSettings = function (t, n) {
            r("promiseDone")(
              o("AdsSettingsDataLoader").loadSettings(t, n),
              function (e) {
                return r("AdsSettingsAdsSettingsLoadedAction").dispatch(
                  { data: { settings: e, accountID: t } },
                  {
                    line: "27",
                    module: "AdsSettingsDataDispatcher.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {
                return r("AdsSettingsAdsSettingsLoadErrorAction").dispatch(
                  { data: { accountID: t, apiFields: n } },
                  {
                    line: "31",
                    module: "AdsSettingsDataDispatcher.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          (t.updateSettings = function (t, n) {
            r("promiseDone")(
              o("AdsSettingsDataLoader").updateSettings(t, n),
              function (e) {
                return r("AdsSettingsAdsSettingsUpdatedAction").dispatch(
                  { data: { accountID: t, settings: n } },
                  {
                    line: "41",
                    module: "AdsSettingsDataDispatcher.js",
                    moduleID: i.id,
                  },
                );
              },
              function (e) {
                return r("AdsSettingsAdsSettingsUpdateErrorAction").dispatch(
                  { data: { accountID: t, settings: n } },
                  {
                    line: "45",
                    module: "AdsSettingsDataDispatcher.js",
                    moduleID: i.id,
                  },
                );
              },
            );
          }),
          e
        );
      })(),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
