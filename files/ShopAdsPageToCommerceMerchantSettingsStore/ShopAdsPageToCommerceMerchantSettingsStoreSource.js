__d(
  "ShopAdsPageToCommerceMerchantSettingsStoreSource",
  [
    "RelayHooks",
    "ReverseInteropStoreSourceBase",
    "ShopAdsPageToCommerceMerchantSettingsStoreSourceFragment.graphql",
    "ShopAdsPageToCommerceMerchantSettingsStoreSourceServerLoadedQuery.graphql",
    "ShopAdsPageToCommerceMerchantSettingsStoreSourceServerQuery.graphql",
    "TypeCoercionUtils",
    "promiseDone",
    "readClientFragment",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n(
              "ShopAdsPageToCommerceMerchantSettingsStoreSourceServerQuery.graphql",
            )),
      d =
        s !== void 0
          ? s
          : (s = n(
              "ShopAdsPageToCommerceMerchantSettingsStoreSourceServerLoadedQuery.graphql",
            )),
      m =
        u !== void 0
          ? u
          : (u = n(
              "ShopAdsPageToCommerceMerchantSettingsStoreSourceFragment.graphql",
            )),
      p = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getQuery = function () {
            return d;
          }),
          (n.__getVariables = function () {
            return {};
          }),
          (n.__fetchQuery = function (t, n) {
            var e = this,
              a = t.map(function (e) {
                return e.toString();
              }),
              i = "loaded_pages",
              l = "Page";
            this.updateRecords(a, i, l);
            var s = o("RelayHooks")
              .fetchQuery(this.__environment, c, { ids: a })
              .toPromise()
              .then(function (t) {
                var n, r;
                return {
                  nodes:
                    (n =
                      t == null || (r = t.nodes) == null
                        ? void 0
                        : r.map(function (t) {
                            return e.$ShopAdsPageToCommerceMerchantSettingsStoreSource$p_1(
                              t,
                            );
                          })) != null
                      ? n
                      : [],
                };
              })
              .catch(function (r) {
                return e.handleFetchQueryError(t, n, r);
              });
            r("promiseDone")(s);
          }),
          (n.__getCached = function (t, n) {
            var e = this,
              o = t.map(function (e) {
                return e.toString();
              }),
              a = o.map(function (t) {
                return {
                  key: t,
                  value: r("readClientFragment")(
                    e.__environment,
                    c,
                    m,
                    { ids: [t] },
                    {},
                    t,
                    function (t) {
                      return e.$ShopAdsPageToCommerceMerchantSettingsStoreSource$p_1(
                        t,
                      );
                    },
                  ),
                };
              });
            return a;
          }),
          (n.$ShopAdsPageToCommerceMerchantSettingsStoreSource$p_1 = function (
            t,
          ) {
            var e, n, r, a;
            return t != null
              ? {
                  id: t.id,
                  name: (e = t.name) != null ? e : void 0,
                  picture:
                    t.picture != null
                      ? {
                          data: {
                            url: o("TypeCoercionUtils").coerceNonMaybeValue(
                              (n = t.picture) == null ? void 0 : n.uri,
                              "data.picture?.uri",
                              i.id,
                            ),
                          },
                        }
                      : void 0,
                  mini_shop_storefront:
                    (r =
                      (a = t.mini_shop_storefront) == null
                        ? void 0
                        : a.mini_shop_storefront_spec) != null
                      ? r
                      : void 0,
                }
              : void 0;
          }),
          t
        );
      })(r("ReverseInteropStoreSourceBase"));
    l.default = p;
  },
  98,
);
