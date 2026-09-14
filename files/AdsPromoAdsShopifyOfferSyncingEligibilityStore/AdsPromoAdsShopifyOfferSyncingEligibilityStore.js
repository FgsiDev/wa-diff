__d(
  "AdsPromoAdsShopifyOfferSyncingEligibilityStore",
  [
    "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSource",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsPromoAdsShopifyOfferSyncingEligibilityStore.DATA_UPDATED",
      s = { is_eligible: null },
      u = (function (t) {
        function n() {
          var n,
            o = new (r(
              "AdsPromoAdsShopifyOfferSyncingEligibilityStoreSource",
            ))();
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
            var e = this.getSingleValue(t, s);
            return e;
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
