__d(
  "AdsReachFrequencyUISelector",
  [
    "AdsReachFrequencyDeliveryOptions",
    "AdsReachFrequencyUIProvider",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
      [r("AdsReachFrequencyUIProvider").toFluxStore()],
      function (t) {
        return (
          r("AdsReachFrequencyUIProvider")().get(t) ||
          o("AdsReachFrequencyDeliveryOptions").AdsReachFrequencyDeliveryOptions
            .STANDARD
        );
      },
      { name: i.id + ".getReachFrequencyAdDeliveryMethod" },
    );
    l.getReachFrequencyAdDeliveryMethod = e;
  },
  98,
);
