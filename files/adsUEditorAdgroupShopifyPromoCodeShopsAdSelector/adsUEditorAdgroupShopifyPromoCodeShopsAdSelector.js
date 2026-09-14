__d(
  "adsUEditorAdgroupShopifyPromoCodeShopsAdSelector",
  [
    "AdsUEditorSelectors",
    "LoadObject",
    "ShopsAdsShopifyShopCheckProvider",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsUEditorAdgroupShopifyPromoCodeShopsAdSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsGetUniformValueSelector")(
            o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
              var t;
              return (
                ((t = e.creative) == null || (t = t.destination_spec) == null
                  ? void 0
                  : t.destination_type) === "WEBSITE_AND_SHOP"
              );
            }),
            !1,
          ),
          o("adsUEditorAdgroupShopifyPromoCodeShopsAdSelectorUtils")
            .pageSelector,
          o("adsUEditorAdgroupShopifyPromoCodeShopsAdSelectorUtils")
            .selectedInstagramAccountSelector,
          r("ShopsAdsShopifyShopCheckProvider").toFluxSelector(),
        ],
        function (t, n, o, a) {
          var e = t;
          if (!e)
            return r("LoadObject").withValue(
              { is_shopify_seller_shops_ad: !1 },
              { creatorModuleID: i.id },
            );
          var l = {
            fbPageID: n == null ? void 0 : n.id,
            instagramAccountID: o == null ? void 0 : o.id,
            isShopsAd: e,
          };
          return a.get(l);
        },
        { name: i.id + ".adsUEditorAdgroupShopifyPromoCodeShopsAdSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
