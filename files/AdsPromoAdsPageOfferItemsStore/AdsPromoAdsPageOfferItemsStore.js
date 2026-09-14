__d(
  "AdsPromoAdsPageOfferItemsStore",
  [
    "AdsPromoAdsPageOfferItemsStoreSource",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsPromoAdsPageOfferItemsStore.DATA_UPDATED",
      s = (function (t) {
        function n() {
          var n,
            o = new (r("AdsPromoAdsPageOfferItemsStoreSource"))();
          return (
            (n = t.call(this, o, e) || this),
            (n.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(u, function (e) {
                return u.get(e);
              });
            })),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.get = function (t) {
            return this.getSingleField(t, "promo_offer_items_container");
          }),
          n
        );
      })(r("ReverseInteropStoreBase"));
    s.__moduleID = i.id;
    var u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
