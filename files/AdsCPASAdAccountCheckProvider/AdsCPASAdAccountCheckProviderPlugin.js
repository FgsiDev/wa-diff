__d(
  "AdsCPASAdAccountCheckProviderPlugin",
  ["AdsCPASAdsManagerDataLoader", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(function (e) {
          return o("AdsCPASAdsManagerDataLoader").checkIfCPASAdAccount(e);
        }),
      },
      s = e;
    l.default = s;
  },
  98,
);
