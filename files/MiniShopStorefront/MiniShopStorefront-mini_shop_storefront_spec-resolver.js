__d(
  "MiniShopStorefront-mini_shop_storefront_spec-resolver",
  [
    "MiniShopStorefrontMiniShopStorefrontSpecResolver.graphql",
    "MiniShopStorefrontSpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("MiniShopStorefrontMiniShopStorefrontSpecResolver.graphql")),
        t,
      );
      return o("MiniShopStorefrontSpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.mini_shop_storefront_spec = s;
  },
  98,
);
