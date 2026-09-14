__d(
  "AdsPagePostSearchByIDDataManager",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsPagePostProvider",
    "adsStorePromiseAsyncGetForSyncStore",
    "promiseAny",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPagePostProvider").toFluxStore(),
      s = function () {
        this.search = function (t, n) {
          var a = [
            r("adsStorePromiseAsyncGetForSyncStore")(e, function () {
              return o(
                "AdsLoadStateUtils_LEGACY",
              ).fromLoadObjectTreatEmptyAsLoading(e.getState().get(t));
            }),
          ];
          return r("promiseAny")(a);
        };
      },
      u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
