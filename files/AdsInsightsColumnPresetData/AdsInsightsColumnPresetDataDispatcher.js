__d(
  "AdsInsightsColumnPresetDataDispatcher",
  [
    "AdsInsightsColumnPresetDataLoader",
    "AdsInsightsCreateColumnPresetSuccessAction",
    "AdsInsightsDeleteColumnPresetErrorAction",
    "AdsInsightsDeleteColumnPresetSuccessAction",
    "AdsInsightsFetchColumnPresetErrorAction",
    "AdsInsightsFetchColumnPresetSuccessAction",
    "AdsInsightsUpdateColumnPresetErrorAction",
    "AdsMgmtAdAccountUserSettingsAPIErrorAction",
    "performanceNow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      r("promiseDone")(
        r("AdsInsightsColumnPresetDataLoader").create(e),
        function (t) {
          return r("AdsInsightsCreateColumnPresetSuccessAction").dispatch(
            { accountID: e.accountID, newID: t, oldID: e.id },
            {
              line: "30",
              module: "AdsInsightsColumnPresetDataDispatcher.js",
              moduleID: i.id,
            },
          );
        },
        function (t) {
          return r("AdsMgmtAdAccountUserSettingsAPIErrorAction").dispatch(
            { fieldSet: "column", accountID: e.accountID },
            {
              line: "36",
              module: "AdsInsightsColumnPresetDataDispatcher.js",
              moduleID: i.id,
            },
          );
        },
      );
    }
    function u(e) {
      r("promiseDone")(
        r("AdsInsightsColumnPresetDataLoader").delete(e),
        function () {
          return r("AdsInsightsDeleteColumnPresetSuccessAction").dispatch(
            { accountID: e.accountID, id: e.id },
            {
              line: "47",
              module: "AdsInsightsColumnPresetDataDispatcher.js",
              moduleID: i.id,
            },
          );
        },
        function (t) {
          return r("AdsInsightsDeleteColumnPresetErrorAction").dispatch(
            { accountID: e.accountID, error: t },
            {
              line: "52",
              module: "AdsInsightsColumnPresetDataDispatcher.js",
              moduleID: i.id,
            },
          );
        },
      );
    }
    function c(t) {
      var n = (e || (e = r("performanceNow")))();
      r("promiseDone")(
        r("AdsInsightsColumnPresetDataLoader").fetch(t),
        function (o) {
          r("AdsInsightsFetchColumnPresetSuccessAction").dispatch(
            {
              accountID: t,
              columnPresets: o,
              requestTime: (e || (e = r("performanceNow")))() - n,
            },
            {
              line: "64",
              module: "AdsInsightsColumnPresetDataDispatcher.js",
              moduleID: i.id,
            },
          );
        },
        function (e) {
          r("AdsInsightsFetchColumnPresetErrorAction").dispatch(
            { accountID: t, error: e },
            {
              line: "71",
              module: "AdsInsightsColumnPresetDataDispatcher.js",
              moduleID: i.id,
            },
          );
        },
      );
    }
    function d(e) {
      r("promiseDone")(
        r("AdsInsightsColumnPresetDataLoader").update(e),
        null,
        function (t) {
          return r("AdsInsightsUpdateColumnPresetErrorAction").dispatch(
            { accountID: e.accountID, error: t },
            {
              line: "84",
              module: "AdsInsightsColumnPresetDataDispatcher.js",
              moduleID: i.id,
            },
          );
        },
      );
    }
    ((l.createColumnPreset = s),
      (l.deleteColumnPreset = u),
      (l.loadColumnPresets = c),
      (l.updateColumnPreset = d));
  },
  98,
);
