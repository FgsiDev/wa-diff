__d(
  "ShopAdsPageToCommerceMerchantSettingsSelector",
  [
    "ShopAdsPageToCommerceMerchantSettingsProvider",
    "ShopAdsPageToCommerceMerchantSettingsStore",
    "adsCreateStoreThunkSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("ShopAdsPageToCommerceMerchantSettingsProvider").toFluxStore(),
      s = r("adsCreateStoreThunkSelector")(e, function (t) {
        return e.getState().get(t);
      }),
      u = r("gkx")("8187")
        ? r("ShopAdsPageToCommerceMerchantSettingsStore").fluxGetSelector()
        : s,
      c = u;
    l.default = c;
  },
  98,
);
