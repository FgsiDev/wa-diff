__d(
  "ShopAdsPageToCommerceMerchantSettingsStoreSourceFragment.graphql",
  ["MiniShopStorefront-mini_shop_storefront_spec-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "ShopAdsPageToCommerceMerchantSettingsStoreSourceFragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: "name",
          args: null,
          kind: "ScalarField",
          name: "page_name",
          storageKey: null,
        },
        {
          alias: "picture",
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "MiniShopStorefront",
          kind: "LinkedField",
          name: "mini_shop_storefront",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              fragment: {
                args: null,
                kind: "FragmentSpread",
                name: "MiniShopStorefrontMiniShopStorefrontSpecResolver",
              },
              kind: "RelayResolver",
              name: "mini_shop_storefront_spec",
              resolverModule: n(
                "MiniShopStorefront-mini_shop_storefront_spec-resolver",
              ).mini_shop_storefront_spec,
              path: "mini_shop_storefront.mini_shop_storefront_spec",
            },
          ],
          storageKey: null,
        },
      ],
      type: "Page",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
