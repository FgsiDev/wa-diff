__d(
  "MiniShopStorefrontSpecUtil",
  [
    "FBLogger",
    "ShopAds_Capability",
    "ShopStatus",
    "TypeCoercionUtils",
    "getJSEnumKeySafe",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $;
      if (e.__typename !== "MiniShopStorefront")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          "Expected MiniShopStorefront type, got %s",
          e.__typename,
        );
      return {
        commerce_merchant_settings:
          e.commerce_merchant_settings != null
            ? {
                display_name:
                  (t =
                    (n = e.commerce_merchant_settings) == null
                      ? void 0
                      : n.display_name) != null
                    ? t
                    : void 0,
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.commerce_merchant_settings.id,
                  "commerce_merchant_settings.id",
                  i.id,
                ),
                onsite_checkout_enabled_countries: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (a = e.commerce_merchant_settings) == null
                    ? void 0
                    : a.onsite_checkout_enabled_countries,
                ),
                onsite_checkout_enabled_for_shops_ads_supported_countries:
                  (l =
                    (s = e.commerce_merchant_settings) == null
                      ? void 0
                      : s.onsite_checkout_enabled_for_shops_ads_supported_countries) !=
                  null
                    ? l
                    : void 0,
                shop_ads_capabilities:
                  ((u = e.commerce_merchant_settings) == null
                    ? void 0
                    : u.shop_ads_capabilities) != null
                    ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        (c = e.commerce_merchant_settings) == null
                          ? void 0
                          : c.shop_ads_capabilities.map(function (e) {
                              return r("getJSEnumKeySafe")(
                                r("ShopAds_Capability"),
                                e,
                              );
                            }),
                      )
                    : void 0,
                shop_catalog:
                  ((d = e.commerce_merchant_settings) == null
                    ? void 0
                    : d.product_catalog) != null
                    ? {
                        id:
                          (m =
                            (p = e.commerce_merchant_settings) == null
                              ? void 0
                              : p.product_catalog.id) != null
                            ? m
                            : void 0,
                        name:
                          (_ =
                            (f = e.commerce_merchant_settings) == null ||
                            (f = f.product_catalog) == null
                              ? void 0
                              : f.name) != null
                            ? _
                            : void 0,
                      }
                    : void 0,
              }
            : void 0,
        id: o("TypeCoercionUtils").coerceNonMaybeValue(e.id, "id", i.id),
        ig_user:
          e.ig_user != null
            ? {
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.ig_user.id,
                  "ig_user.id",
                  i.id,
                ),
                legacy_instagram_user_id:
                  (g = e.ig_user) == null
                    ? void 0
                    : g.ig_user_id_fbv1_do_not_use,
                profile_picture:
                  (h =
                    (y = e.ig_user) == null || (y = y.profile_picture) == null
                      ? void 0
                      : y.uri) != null
                    ? h
                    : void 0,
                profile_picture_url:
                  (C =
                    (b = e.ig_user) == null || (b = b.profile_picture) == null
                      ? void 0
                      : b.uri) != null
                    ? C
                    : void 0,
                username:
                  (v = (S = e.ig_user) == null ? void 0 : S.username) != null
                    ? v
                    : void 0,
              }
            : void 0,
        page:
          e.page != null
            ? {
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.page.id,
                  "page.id",
                  i.id,
                ),
                name:
                  (R = (L = e.page) == null ? void 0 : L.name) != null
                    ? R
                    : void 0,
                picture:
                  ((E = e.page) == null ? void 0 : E.profile_picture) != null
                    ? {
                        data: {
                          url: o("TypeCoercionUtils").coerceNonMaybeValue(
                            (k = e.page) == null ||
                              (k = k.profile_picture) == null
                              ? void 0
                              : k.uri,
                            "page.profile_picture.uri",
                            i.id,
                          ),
                        },
                      }
                    : void 0,
              }
            : void 0,
        shop_active_promotions:
          (I = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.shop_active_promotions,
          )) != null
            ? I
            : void 0,
        shop_catalog: void 0,
        shop_product_count: (T = e.shop_product_count) != null ? T : void 0,
        shop_status:
          (D = r("getJSEnumSafe")(r("ShopStatus"), e.shop_status)) != null
            ? D
            : void 0,
        title: (x = e.title) != null ? x : void 0,
        workspace:
          e.workspace_id != null
            ? { id: ($ = e.workspace_id) != null ? $ : void 0 }
            : void 0,
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
