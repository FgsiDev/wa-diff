__d(
  "ShopAdsPageToCommerceMerchantSettingsStore",
  [
    "ReverseInteropStoreBase",
    "ShopAdsPageToCommerceMerchantSettingsStoreSource",
    "adsCreateStoreThunkSelector",
    "gkx",
    "immutable",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ShopAdsPageToCommerceMerchantSettingsStore.DATA_UPDATED",
      s = (function (t) {
        function n() {
          var n,
            o = new (r("ShopAdsPageToCommerceMerchantSettingsStoreSource"))();
          return (
            (n =
              t.call(this, o, e, { batchSize: r("gkx")("5322") ? 10 : 5 }) ||
              this),
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
            return this.getSingleValue(t, {});
          }),
          (o.getAll = function (t) {
            return this.getAllImpl(t);
          }),
          (o.getLoadedMap = function () {
            if (!this.$ShopAdsPageToCommerceMerchantSettingsStore$p_1) {
              var e = this.__reverseInteropHandler
                  .getLoadedKeysAndFields()
                  .keys(),
                t = [];
              for (var n of e) {
                var o = this.getCachedSingleValue(n, {});
                o.hasValue() && t.push([n, o.getValueEnforcing()]);
              }
              this.$ShopAdsPageToCommerceMerchantSettingsStore$p_1 =
                r("immutable").Map(t);
            }
            return this.$ShopAdsPageToCommerceMerchantSettingsStore$p_1;
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
