__d(
  "CatalogProductExtensionsMainProductSetDataProviderPlugin",
  ["ProductSetAPIClient", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(function (e) {
          var t = e.adUrl,
            n = e.catalogId,
            o = e.requestSource;
          return r("ProductSetAPIClient").loadFirstEligibleFromCatalog(n, t, o);
        }),
      },
      s = e;
    l.default = s;
  },
  98,
);
