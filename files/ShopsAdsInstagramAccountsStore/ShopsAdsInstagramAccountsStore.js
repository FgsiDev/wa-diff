__d(
  "ShopsAdsInstagramAccountsStore",
  [
    "ReverseInteropStoreBase",
    "ShopsAdsInstagramAccountsStoreSource",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ShopsAdsInstagramAccountsStore.DATA_UPDATED",
      s = {
        data: {
          id: null,
          username: null,
          profile_pic: null,
          workspace: { id: null },
          mini_shop_storefront: {
            id: null,
            title: null,
            shop_product_count: null,
            shop_status: null,
            commerce_merchant_settings: {
              id: null,
              shop_ads_capabilities: null,
              shop_catalog: { id: null, name: null },
              display_name: null,
              onsite_checkout_enabled_countries: null,
              onsite_checkout_enabled_for_shops_ads_supported_countries: null,
            },
            page: { id: null, name: null, picture: null },
            ig_user: {
              id: null,
              legacy_instagram_user_id: null,
              username: null,
              picture: null,
              profile_picture: null,
              profile_picture_uri: null,
            },
          },
        },
      },
      u = (function (t) {
        function n() {
          var n,
            o = new (r("ShopsAdsInstagramAccountsStoreSource"))();
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
