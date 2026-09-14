__d(
  "AdsCPASParentCatalogEventSourcesDataProviderPlugin",
  ["AdsCPASParentCatalogEventSourcesDataLoader", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(function (e) {
          return o(
            "AdsCPASParentCatalogEventSourcesDataLoader",
          ).getParentCatalogEventSourcesData(e);
        }),
      },
      s = e;
    l.default = s;
  },
  98,
);
