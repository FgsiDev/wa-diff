__d(
  "AdsCreativePrefilledSiteLinksDataProviderPlugin",
  [
    "AdsCreativeSiteLinksAPICallUtils",
    "loadObjectMapProvider",
    "stableStringify",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r("loadObjectMapProvider").keyed(
          o("AdsCreativeSiteLinksAPICallUtils").loadDomainAndSiteLinks,
          function (e) {
            return r("stableStringify")(e);
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
