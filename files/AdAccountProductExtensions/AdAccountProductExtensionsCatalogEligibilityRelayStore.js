__d(
  "AdAccountProductExtensionsCatalogEligibilityRelayStore",
  [
    "AdAccountProductExtensionsCatalogEligibilityRelayStoreQuery.graphql",
    "adsCreateRelayStoreForMigration",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "AdAccountProductExtensionsCatalogEligibilityRelayStoreQuery.graphql",
            ));
    function u(e) {
      return {
        adAccountID: e.adAccountID,
        adgroupID: e.adgroupID,
        isCTM: e.isCTM,
        pageID: e.pageID,
      };
    }
    function c(e) {
      var t, n;
      return (t =
        (n = e.ad_account) == null
          ? void 0
          : n.has_product_extensions_eligible_catalog) != null
        ? t
        : !1;
    }
    var d = r("adsCreateRelayStoreForMigration")(s, u, c);
    ((l.buildAdAccountProductExtensionsCatalogEligibilityVariables = u),
      (l.readAdAccountProductExtensionsCatalogEligibility = c),
      (l.AdAccountProductExtensionsCatalogEligibilityRelayStore = d));
  },
  98,
);
