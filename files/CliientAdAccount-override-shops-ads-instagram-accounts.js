__d(
  "CliientAdAccount-override-shops-ads-instagram-accounts",
  [
    "CliientAdAccountOverrideShopsAdsInstagramAccountsResolverFragment.graphql",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "CliientAdAccountOverrideShopsAdsInstagramAccountsResolverFragment.graphql",
            )),
        t,
      );
      return u(r);
    }
    function u(e) {
      var t,
        n = (t = e == null ? void 0 : e.instagram_accounts) != null ? t : [],
        r = n.map(function (e) {
          var t,
            n,
            r,
            o,
            a,
            i,
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
            E;
          return {
            id:
              ((t = e.mini_shop_storefront) == null || (t = t.ig_user) == null
                ? void 0
                : t.legacy_instagram_user_id) != null
                ? (n = e.mini_shop_storefront) == null ||
                  (n = n.ig_user) == null
                  ? void 0
                  : n.legacy_instagram_user_id
                : e == null
                  ? void 0
                  : e.id,
            mini_shop_storefront: {
              commerce_merchant_settings: {
                display_name:
                  (r = e.mini_shop_storefront) == null ||
                  (r = r.commerce_merchant_settings) == null
                    ? void 0
                    : r.display_name,
                id:
                  (o = e.mini_shop_storefront) == null ||
                  (o = o.commerce_merchant_settings) == null
                    ? void 0
                    : o.id,
                onsite_checkout_enabled_countries:
                  (a = e.mini_shop_storefront) == null ||
                  (a = a.commerce_merchant_settings) == null
                    ? void 0
                    : a.onsite_checkout_enabled_countries,
                onsite_checkout_enabled_for_shops_ads_supported_countries:
                  (i = e.mini_shop_storefront) == null ||
                  (i = i.commerce_merchant_settings) == null
                    ? void 0
                    : i.onsite_checkout_enabled_for_shops_ads_supported_countries,
                shop_ads_capabilities:
                  (l = e.mini_shop_storefront) == null ||
                  (l = l.commerce_merchant_settings) == null
                    ? void 0
                    : l.shop_ads_capabilities,
                shop_catalog: {
                  id:
                    (s = e.mini_shop_storefront) == null ||
                    (s = s.commerce_merchant_settings) == null ||
                    (s = s.shop_catalog) == null
                      ? void 0
                      : s.id,
                  name:
                    (u = e.mini_shop_storefront) == null ||
                    (u = u.commerce_merchant_settings) == null ||
                    (u = u.shop_catalog) == null
                      ? void 0
                      : u.name,
                },
              },
              id: (c = e.mini_shop_storefront) == null ? void 0 : c.id,
              ig_user: {
                id:
                  (d = e.mini_shop_storefront) == null ||
                  (d = d.ig_user) == null
                    ? void 0
                    : d.id,
                legacy_instagram_user_id:
                  (m = e.mini_shop_storefront) == null ||
                  (m = m.ig_user) == null
                    ? void 0
                    : m.legacy_instagram_user_id,
                profile_picture:
                  (p = e.mini_shop_storefront) == null ||
                  (p = p.ig_user) == null ||
                  (p = p.profile_picture) == null
                    ? void 0
                    : p.uri,
                profile_picture_url:
                  (_ = e.mini_shop_storefront) == null ||
                  (_ = _.ig_user) == null ||
                  (_ = _.profile_picture) == null
                    ? void 0
                    : _.uri,
                username:
                  (f = e.mini_shop_storefront) == null ||
                  (f = f.ig_user) == null
                    ? void 0
                    : f.username,
              },
              page: {
                id:
                  (g = e.mini_shop_storefront) == null || (g = g.page) == null
                    ? void 0
                    : g.id,
                name:
                  (h = e.mini_shop_storefront) == null || (h = h.page) == null
                    ? void 0
                    : h.name,
                picture: {
                  data: {
                    url:
                      (y = e.mini_shop_storefront) == null ||
                      (y = y.page) == null ||
                      (y = y.profile_picture) == null
                        ? void 0
                        : y.uri,
                  },
                },
              },
              shop_product_count:
                (C = e.mini_shop_storefront) == null
                  ? void 0
                  : C.shop_product_count,
              shop_status:
                (b = e.mini_shop_storefront) == null ? void 0 : b.shop_status,
              title:
                ((v = e.mini_shop_storefront) == null ||
                (v = v.commerce_merchant_settings) == null
                  ? void 0
                  : v.display_name) != null
                  ? (S = e.mini_shop_storefront) == null ||
                    (S = S.commerce_merchant_settings) == null
                    ? void 0
                    : S.display_name
                  : (R = e.mini_shop_storefront) == null
                    ? void 0
                    : R.title,
              workspace: {
                id:
                  (L = e.mini_shop_storefront) == null
                    ? void 0
                    : L.workspace_id,
              },
              workspace_id:
                (E = e.mini_shop_storefront) == null ? void 0 : E.workspace_id,
            },
            profile_pic: e.profile_pic,
            username: e.username,
          };
        });
      return { data: r };
    }
    ((l.shops_ads_instagram_accounts = s), (l.coerceGraphQLSpecToGraphAPI = u));
  },
  98,
);
