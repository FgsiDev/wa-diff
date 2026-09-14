__d(
  "adsUEditorAdgroupDefaultCommerceProductSetIDSelector",
  [
    "AdAccountFirstEligibleCommerceProductSetDataProvider",
    "AdAccountFirstEligibleCommerceProductSetKey",
    "AdAccountFirstEligibleCommerceProductSetWithoutOnsiteCMSFilterDataProvider",
    "AdAccountFirstEligibleProductSetKey",
    "AdToCatalogUtils",
    "AdsAccountStore",
    "LoadObject",
    "adsCreateSelector",
    "adsUEditorAdgroupCmsIDFromIdentityOrShopSpecSelector",
    "adsUEditorIsSTOCampaignSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r(
            "AdAccountFirstEligibleCommerceProductSetDataProvider",
          ).toFluxSelector(),
          r(
            "AdAccountFirstEligibleCommerceProductSetWithoutOnsiteCMSFilterDataProvider",
          ).toFluxSelector(),
          r("adsUEditorIsSTOCampaignSelector"),
          o("adsUEditorAdgroupCmsIDFromIdentityOrShopSpecSelector")
            .adsUEditorAdgroupCmsIDFromIdentityOrShopSpecSelector,
        ],
        function (t, n, a, l, s) {
          if (t == null)
            return r("LoadObject").empty({ creatorModuleID: i.id });
          if (l) {
            var e = o(
              "AdToCatalogUtils",
            ).isPEDefaultingLatencyImprovementEnabled(!0)
              ? o("AdToCatalogUtils").buildDACatalogMatchKey({ adAccountID: t })
              : new (r("AdAccountFirstEligibleProductSetKey"))({
                  adAccountID: t,
                });
            return a.get(e);
          }
          var u = s.getValue();
          if (u == null)
            return r("LoadObject").empty({ creatorModuleID: i.id });
          var c = o("AdToCatalogUtils").isPEDefaultingLatencyImprovementEnabled(
            !0,
          )
            ? o("AdToCatalogUtils").buildDACommerceCatalogMatchKey({
                adAccountID: t,
                commerceMerchantSettingsID: u,
              })
            : new (r("AdAccountFirstEligibleCommerceProductSetKey"))({
                adAccountID: t,
                commerceMerchantSettingsID: u,
              });
          return n.get(c);
        },
        { name: i.id + ".adsUEditorAdgroupDefaultCommerceProductSetSelector" },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t.map(function (e) {
            return e == null ? void 0 : e.id;
          });
        },
        {
          name: i.id + ".adsUEditorAdgroupDefaultCommerceProductSetIDSelector",
        },
      ),
      u = r("adsCreateSelector")(
        [e],
        function (t) {
          return t.map(function (e) {
            return e == null ? void 0 : e.catalogID;
          });
        },
        {
          name:
            i.id + ".adsUEditorAdgroupDefaultCommerceProductCatalogIDSelector",
        },
      );
    ((l.adsUEditorAdgroupDefaultCommerceProductSetIDSelector = s),
      (l.adsUEditorAdgroupDefaultCommerceProductCatalogIDSelector = u));
  },
  98,
);
