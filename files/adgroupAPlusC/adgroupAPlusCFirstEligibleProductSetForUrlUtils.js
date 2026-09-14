__d(
  "adgroupAPlusCFirstEligibleProductSetForUrlUtils",
  [
    "AdAccountProductExtensionsMainProductSetDataProvider",
    "AdToCatalogUtils",
    "LoadObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.adAccountID,
        n = e.adgroupID,
        a = e.isCTMAd,
        l = e.isEligibleForCtdPe,
        s = e.isEligibleForCtwaPe,
        u = e.pageID,
        c = e.pixelID,
        d = e.url;
      if (t == null || n == null)
        return r("LoadObject").empty({ creatorModuleID: i.id });
      if (o("AdToCatalogUtils").shouldSkipPECatalogFetchForPartialUrl(d, a))
        return r("LoadObject").empty({ creatorModuleID: i.id });
      var m = o("AdToCatalogUtils").buildPECatalogMatchKey({
        adAccountID: t,
        adgroupID: n,
        isCTMAd: a,
        isEligibleForCtdPe: l,
        isEligibleForCtwaPe: s,
        pageID: u,
        pixelID: c,
        url: d,
      });
      return r("AdAccountProductExtensionsMainProductSetDataProvider")().get(m);
    }
    l.getFirstEligibleProductSetForUrl = e;
  },
  98,
);
