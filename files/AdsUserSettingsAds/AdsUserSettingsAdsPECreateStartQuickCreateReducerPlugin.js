__d(
  "AdsUserSettingsAdsPECreateStartQuickCreateReducerPlugin",
  ["AdsAccountSettingsIdProvider", "AdsUserSettingsDataManager", "Laminar"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("Laminar").withFluxSelectors(
          {
            userSettingsID: r("AdsAccountSettingsIdProvider").toFluxSelector(),
          },
          function (e, t, n) {
            var o = n.userSettingsID;
            if (o == null) return e;
            var a = e.get(o);
            return (
              (a &&
                a.hasValue() &&
                a.getValueEnforcing().get("default_creation_mode") ===
                  "QUICK_CREATION") ||
                !o ||
                r("AdsUserSettingsDataManager").setDefaultCreationMode(
                  o,
                  "QUICK_CREATION",
                ),
              e
            );
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
