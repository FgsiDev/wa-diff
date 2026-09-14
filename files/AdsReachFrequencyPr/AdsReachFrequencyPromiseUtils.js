__d(
  "AdsReachFrequencyPromiseUtils",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsPredictionProvider",
    "adsStorePromiseAsyncGetForSyncStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPredictionProvider").toFluxStore();
    function s(t) {
      return r("adsStorePromiseAsyncGetForSyncStore")(e, function () {
        return o("AdsLoadStateUtils_LEGACY").fromLoadObjectTreatEmptyAsLoading(
          e.getState().get(t),
        );
      });
    }
    l.promisePrediction = s;
  },
  98,
);
