__d(
  "adsCreativePrefilledSiteLinksDefaultSelector",
  [
    "AdsCreativePrefilledSiteLinksDataProvider",
    "adsCreateSelector",
    "cr:11963",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateSelector")(
        [r("AdsCreativePrefilledSiteLinksDataProvider").toFluxSelector()],
        function (t) {
          return function (e) {
            return t.get(e);
          };
        },
        { name: i.id + ".legacyAdsCreativePrefilledSiteLinksGetterSelector" },
      ),
      u =
        (e =
          n("cr:11963") == null ? void 0 : n("cr:11963").fluxGetSelector()) !=
        null
          ? e
          : s;
    l.default = u;
  },
  98,
);
