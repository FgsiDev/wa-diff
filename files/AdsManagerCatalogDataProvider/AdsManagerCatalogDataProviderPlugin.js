__d(
  "AdsManagerCatalogDataProviderPlugin",
  ["ProductCatalogAPIReadOnlyClient", "gkx", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["capabilities", "vertical"],
      s = [].concat(e, ["dominant_pixel"]),
      u = {
        initialState: r(
          "loadObjectMapProvider",
        ).withSingleKeyLoader_USE_SPARINGLY(function (t) {
          var n = r("gkx")("9037") ? s : e;
          return o("ProductCatalogAPIReadOnlyClient")
            .loadWithFields(t, n)
            .then(function (e) {
              return {
                capabilities: e.capabilities,
                vertical: e.vertical,
                dominantPixel: e.dominant_pixel,
              };
            });
        }),
      },
      c = u;
    l.default = c;
  },
  98,
);
