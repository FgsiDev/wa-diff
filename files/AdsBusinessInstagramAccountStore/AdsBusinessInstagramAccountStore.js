__d(
  "AdsBusinessInstagramAccountStore",
  [
    "AdsBusinessInstagramAccountStoreSource",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsBusinessInstagramAccountStore.DATA_UPDATED",
      s = {
        data: {
          eimu_id: null,
          has_create_ads_access: null,
          has_profile_pic: null,
          id: null,
          instagram_connected_threads_user: {
            threads_user_id: null,
            threads_user_profile_pic: null,
          },
          is_authorized_for_political: null,
          is_connected_to_ad_account: null,
          is_private: null,
          is_professional_account: null,
          is_published: null,
          is_shopless_account_with_dynamic_product_tags_enabled: null,
          is_shopless_account_with_static_product_tags_enabled: null,
          is_shopping_onsite_checkout_enabled: null,
          legacy_instagram_user_id: null,
          profile_picture_url: null,
          shopping_review_status: null,
          username: null,
        },
      },
      u = (function (t) {
        function n() {
          var n,
            o = new (r("AdsBusinessInstagramAccountStoreSource"))();
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
