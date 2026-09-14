__d(
  "AdAccountFirstEligibleProductSetDataProviderPlugin",
  ["isProductSetRelayStoreOptInEnabled", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(function (e) {
          return o(
            "isProductSetRelayStoreOptInEnabled",
          ).AdAccountFirstEligibleProductSetDataProviderPluginDefault(e);
        }),
      },
      s = e;
    l.default = s;
  },
  98,
);
