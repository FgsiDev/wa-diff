__d(
  "AdToCatalogUtils",
  [
    "AdAccountFirstEligibleCommerceProductSetKey",
    "AdAccountFirstEligibleProductSetKey",
    "AdAccountProductExtensionsMainProductKey",
    "CatalogAdoptionExperimentationUtils",
    "CatalogProductExtensionsMainProductKey",
    "ads-lib-urllib",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("ads-lib-urllib").getDomain(e);
      return t != null && t.includes(".");
    }
    function s(t, n) {
      return (
        n === void 0 && (n = !1),
        !u() || n || t == null || t.trim() === "" ? !1 : !e(t.trim())
      );
    }
    function u(e) {
      return (
        e === void 0 && (e = !1),
        r("justknobx")._("5036")
          ? !1
          : o(
              "CatalogAdoptionExperimentationUtils",
            ).checkExpForCatalogAdoptionExperimentation(
              "pe_endpoint_dedup_q2_2026",
              "pe_endpoint_dedup",
              null,
              null,
              e,
            )
      );
    }
    function c(e) {
      var t = e.adAccountID,
        n = e.adgroupID,
        o = e.isCTMAd,
        a = e.isEligibleForCtdPe,
        i = e.isEligibleForCtwaPe,
        l = e.pageID,
        s = e.pixelID,
        u = e.requestSource,
        c = e.url;
      return new (r("AdAccountProductExtensionsMainProductKey"))({
        adAccountID: t,
        adgroupID: n,
        isCTMAd: o,
        isEligibleForCtdPe: a,
        isEligibleForCtwaPe: i,
        pageID: l,
        pixelID: s,
        requestSource: u != null ? u : "PRODUCT_EXTENSIONS",
        url: o ? null : c,
      });
    }
    function d(e) {
      return new (r("CatalogProductExtensionsMainProductKey"))({
        adUrl: e.adUrl,
        catalogId: e.catalogId,
        requestSource: "PRODUCT_EXTENSIONS",
      });
    }
    function m(e) {
      var t, n, o;
      return new (r("AdAccountFirstEligibleProductSetKey"))({
        adAccountID: e.adAccountID,
        collaborationMerchantPartnerBusinessID:
          (t = e.collaborationMerchantPartnerBusinessID) != null ? t : null,
        isBwPCampaignGroup: (n = e.isBwPCampaignGroup) != null ? n : !1,
        isCPASCampaign: (o = e.isCPASCampaign) != null ? o : !1,
      });
    }
    function p(e) {
      return new (r("AdAccountFirstEligibleCommerceProductSetKey"))({
        adAccountID: e.adAccountID,
        commerceMerchantSettingsID: e.commerceMerchantSettingsID,
      });
    }
    ((l.isUrlReadyForCatalogFetch = e),
      (l.shouldSkipPECatalogFetchForPartialUrl = s),
      (l.isPEDefaultingLatencyImprovementEnabled = u),
      (l.buildPECatalogMatchKey = c),
      (l.buildPCAUnificationProductSetKey = d),
      (l.buildDACatalogMatchKey = m),
      (l.buildDACommerceCatalogMatchKey = p));
  },
  98,
);
