__d(
  "adsManagerCatalogDefaultSelector",
  ["AdsManagerCatalogDataProvider", "adsCreateSelector", "cr:11298"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [r("AdsManagerCatalogDataProvider").toFluxSelector()],
        function (t) {
          return function (e) {
            return t.get(e);
          };
        },
        { name: i.id + ".legacyAdsManagerCatalogGetterSelector" },
      ),
      u =
        (e =
          n("cr:11298") == null ? void 0 : n("cr:11298").fluxGetSelector()) !=
        null
          ? e
          : s;
    l.default = u;
  },
  98,
);
