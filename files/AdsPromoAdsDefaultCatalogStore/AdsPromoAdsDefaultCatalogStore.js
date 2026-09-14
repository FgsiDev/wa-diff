__d(
  "AdsPromoAdsDefaultCatalogStore",
  [
    "AdsPromoAdsDefaultCatalogStoreSource",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsPromoAdsDefaultCatalogStore.DATA_UPDATED",
      s = {
        id: null,
        is_crawled_offers_enabled: null,
        is_promo_ads_always_on_suitable: null,
        name: null,
      },
      u = (function (t) {
        function n() {
          var n,
            o = new (r("AdsPromoAdsDefaultCatalogStoreSource"))();
          return (
            (n = t.call(this, o, e) || this),
            (n.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(c, function (e) {
                return c.get(e);
              });
            })),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.get = function (t) {
            return this.getSingleValue(t, s);
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    u.__moduleID = i.id;
    var c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
