__d(
  "adsPageSetStoreGetAllSelector",
  [
    "AdsPageSetProvider",
    "AdsPageSetStore",
    "StoresToLaminarMigrationODSLoggerUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o(
        "StoresToLaminarMigrationODSLoggerUtil",
      ).adsCreateStoreThunkSelectorForMigrationStores(
        r("AdsPageSetStore"),
        r("AdsPageSetProvider").toFluxStore(),
        function (e) {
          return r("AdsPageSetStore").get(e);
        },
        function (e) {
          return r("AdsPageSetProvider")().get(e);
        },
      ),
      s = e,
      u = s;
    l.default = u;
  },
  98,
);
