__d(
  "AdsBlendedAdsCreationDefaultingStickyOptUpdateReducerPlugin",
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
            return (
              o != null &&
                r(
                  "AdsUserSettingsDataManager",
                ).setBlendedAdsCreationDefaultingOptInStatus(o, t.toggleValue),
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
