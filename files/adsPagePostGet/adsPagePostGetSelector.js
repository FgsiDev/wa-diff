__d(
  "adsPagePostGetSelector",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsPagePostProvider",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPagePostProvider").toFluxStore(),
      s = r("adsCreateStoreThunkSelector")(e, function (t) {
        return o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
          e.getState().get(t),
        );
      });
    l.default = s;
  },
  98,
);
