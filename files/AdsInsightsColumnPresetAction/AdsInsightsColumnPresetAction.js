__d(
  "AdsInsightsColumnPresetAction",
  [
    "AdsInsightsCreateColumnPresetAction",
    "AdsInsightsDeleteColumnPresetAction",
    "AdsInsightsUpdateColumnPresetAction",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      create: function (t) {
        n("AdsInsightsCreateColumnPresetAction").dispatch(
          { columnPreset: t },
          {
            line: "21",
            module: "AdsInsightsColumnPresetAction.js",
            moduleID: a.id,
          },
        );
      },
      delete: function (t) {
        n("AdsInsightsDeleteColumnPresetAction").dispatch(
          { id: t },
          {
            line: "27",
            module: "AdsInsightsColumnPresetAction.js",
            moduleID: a.id,
          },
        );
      },
      update: function (t) {
        n("AdsInsightsUpdateColumnPresetAction").dispatch(
          { columnPreset: t },
          {
            line: "33",
            module: "AdsInsightsColumnPresetAction.js",
            moduleID: a.id,
          },
        );
      },
    };
    a.exports = e;
  },
  null,
);
