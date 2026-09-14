__d(
  "AdsInsightsColumnPresetDataLoader",
  [
    "AdsApplicationUtils",
    "AdsGraphAPI",
    "AdsInsightsColumnPresetDataFields",
    "AdsInsightsColumnPresetUtil",
    "AdsMgmtPreloadingUtils",
    "AdsPEInsightsColumnPresetDataLoaderPreloader",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        create: function (t) {
          var e = o("AdsInsightsColumnPresetUtil").toAPI(t);
          return o("AdsGraphAPI")
            .get(i.id)
            .object("user_settings", t.userSettingsID)
            .edge("column_presets")
            .post(e)
            .then(function (e) {
              return e.id;
            });
        },
        delete: function (t) {
          return o("AdsGraphAPI")
            .get(i.id)
            .object("column_preset", t.id)
            .remove();
        },
        fetch: function (t) {
          var e = o("AdsGraphAPI").get(i.id).adaccount(t);
          return (
            o("AdsApplicationUtils").isPowerEditor() &&
              e.preloadedBy(
                o("AdsPEInsightsColumnPresetDataLoaderPreloader").preloader,
                o("AdsMgmtPreloadingUtils").defaultConfig,
              ),
            e
              .get({ fields: r("AdsInsightsColumnPresetDataFields").fields })
              .then(function (e) {
                var n = r("getByPath")(e, ["user_settings", "id"]) || "unknown",
                  a =
                    r("getByPath")(e, [
                      "user_settings",
                      "column_presets",
                      "data",
                    ]) || [];
                return a.map(function (e) {
                  return o("AdsInsightsColumnPresetUtil").fromAPI(e, t, n);
                });
              })
          );
        },
        update: function (t) {
          var e = o("AdsInsightsColumnPresetUtil").toAPI(t);
          return o("AdsGraphAPI")
            .get(i.id)
            .object("column_preset", t.id)
            .post(e);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
