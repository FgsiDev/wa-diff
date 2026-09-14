__d(
  "adsShopifyPromoCodesFetchAPIUtils",
  [
    "AdsManagerRelayEnvironment",
    "Promise",
    "RelayHooks",
    "adsShopifyPromoCodesFetchAPIUtilsDataLoaderQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("adsShopifyPromoCodesFetchAPIUtilsDataLoaderQuery.graphql")),
      c = function (t) {
        var e = t.fbPageID,
          a = t.instagramAccountID,
          i = t.isShopsAd;
        return i
          ? o("RelayHooks")
              .fetchQuery(r("AdsManagerRelayEnvironment"), u, {
                fbPageID: e,
                igUserID: a,
                isShopsAd: i,
              })
              .toPromise()
              .then(function (e) {
                var t, n;
                return {
                  is_shopify_seller_shops_ad:
                    (t =
                      e == null ||
                      (n = e.xfb_is_shopify_seller_shops_ad) == null
                        ? void 0
                        : n.is_shopify_seller_shops_ad) != null
                      ? t
                      : !1,
                };
              })
          : (s || (s = n("Promise"))).resolve({
              is_shopify_seller_shops_ad: !1,
            });
      };
    l.adsShopsAdsShopifySellerCheck = c;
  },
  98,
);
