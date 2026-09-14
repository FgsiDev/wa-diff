__d(
  "adgroupPCAUnificationProductSetByCatalogUtils",
  [
    "AdToCatalogUtils",
    "AdsBulkValueUtils",
    "AdsInterfacesLogger",
    "CatalogProductExtensionsMainProductKey",
    "LoadObject",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, l) {
      if (!e) return r("LoadObject").empty({ creatorModuleID: i.id });
      var s,
        u = o("AdsBulkValueUtils").getUniformValueOrDefault(n, null);
      if (t == null) s = r("LoadObject").empty({ creatorModuleID: i.id });
      else if (o("AdToCatalogUtils").shouldSkipPECatalogFetchForPartialUrl(u))
        s = r("LoadObject").empty({ creatorModuleID: i.id });
      else {
        var c = o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
          !0,
        )
          ? o("AdToCatalogUtils").buildPCAUnificationProductSetKey({
              adUrl: u,
              catalogId: t,
            })
          : new (r("CatalogProductExtensionsMainProductKey"))({
              catalogId: t,
              adUrl: u,
              requestSource: "PRODUCT_EXTENSIONS",
            });
        s = a.get(c);
      }
      return (
        s.hasValue() &&
          r("isTruthy")(l) &&
          l.forEach(function (e) {
            var t, n;
            r("AdsInterfacesLogger").logOnce({
              eventName: "ueditor_account_pca_unified_pe_default",
              data:
                ((n = {}),
                (n.subsequent_data =
                  (t = s.getValue()) == null ? void 0 : t.id),
                (n.adgroup_id = e),
                n),
            });
          }),
        s
      );
    }
    l.adgroupPCAUnificationProductSetByCatalogLogic = e;
  },
  98,
);
