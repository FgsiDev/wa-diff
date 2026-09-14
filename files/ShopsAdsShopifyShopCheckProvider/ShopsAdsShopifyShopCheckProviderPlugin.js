__d(
  "ShopsAdsShopifyShopCheckProviderPlugin",
  ["adsShopifyPromoCodesFetchAPIUtils", "loadObjectMapProvider"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: r("loadObjectMapProvider").keyed(
          o("adsShopifyPromoCodesFetchAPIUtils").adsShopsAdsShopifySellerCheck,
          function (e) {
            return JSON.stringify(e);
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
