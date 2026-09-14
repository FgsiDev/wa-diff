__d(
  "CPASPromotableAppsProviderPlugin",
  ["AdsCPASPromotableAppDataManager", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r("loadObjectMapProvider").keyed(
          r("AdsCPASPromotableAppDataManager").fetchCPASPromotableApp,
          function (e) {
            var t = e.adAccountID,
              n = e.appID;
            return t + "." + n;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
