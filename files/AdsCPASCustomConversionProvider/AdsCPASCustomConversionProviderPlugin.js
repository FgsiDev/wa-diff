__d(
  "AdsCPASCustomConversionProviderPlugin",
  ["AdsCPASAdsManagerDataLoader", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r("loadObjectMapProvider").keyed(
          o("AdsCPASAdsManagerDataLoader").getSharedCustomConversions,
          function (e) {
            return JSON.stringify(e);
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
