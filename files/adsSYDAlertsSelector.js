__d(
  "adsSYDAlertsSelector",
  [
    "AdsSYDAlertsProvider",
    "LoadObject",
    "adsAYMTGlobalBannerTipSelector",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [],
      s = r("adsCreateSelector")(
        [
          r("AdsSYDAlertsProvider").toFluxSelector(),
          r("adsAYMTGlobalBannerTipSelector"),
        ],
        function (n, o) {
          return o != null
            ? r("LoadObject").withValue(e, { creatorModuleID: i.id })
            : n.mapValue(function (e) {
                return Array.from(e.values()).map(function (e) {
                  return e.alertData;
                });
              });
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);
