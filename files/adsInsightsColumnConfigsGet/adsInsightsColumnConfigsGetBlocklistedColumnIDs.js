__d(
  "adsInsightsColumnConfigsGetBlocklistedColumnIDs",
  ["AdsInsightsSharedColumnConfigs", "memoize"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoize")(function () {
        return o("AdsInsightsSharedColumnConfigs").getBlocklistedColumnIDs();
      }),
      s = e;
    l.default = s;
  },
  98,
);
