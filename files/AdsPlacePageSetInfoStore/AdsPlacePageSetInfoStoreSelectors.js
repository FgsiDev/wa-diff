__d(
  "AdsPlacePageSetInfoStoreSelectors",
  [
    "AdsPlacePageSetInfoProvider",
    "AdsPlacePageSetInfoStore",
    "StoresToLaminarMigrationODSLoggerUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o(
        "StoresToLaminarMigrationODSLoggerUtil",
      ).adsCreateStoreThunkSelectorForMigrationStores(
        r("AdsPlacePageSetInfoStore"),
        r("AdsPlacePageSetInfoProvider").toFluxStore(),
        function (e) {
          return r("AdsPlacePageSetInfoStore").getAll(e);
        },
        function (e) {
          return r("AdsPlacePageSetInfoProvider")().getAll(e);
        },
        o("StoresToLaminarMigrationODSLoggerUtil").logResultMapComparisonToODS,
      ),
      s = e;
    l.getAllSelector = s;
  },
  98,
);
