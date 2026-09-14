__d(
  "AdsPromoAdsEmailCaptureSettingStore",
  [
    "AdsPromoAdsEmailCaptureSettingStoreSource",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "memoize",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsPromoAdsEmailCaptureSettingStore.DATA_UPDATED",
      s = {
        is_unique_code_offer: null,
        cm_setting_url: null,
        leads_center_url: null,
        page_linked_cms_id: null,
        is_email_capture_opted_in: null,
        is_offer_eligible_for_default_opt_in: null,
        is_shop_email_capture_opted_in: null,
        is_seller_has_privacy_policy: null,
        has_email_capture_offer_synced: null,
        seller_privacy_policy_uri: null,
        shopify_domain_uri: null,
        email_offer_generic_code: null,
        email_offer_type: null,
        email_offer_amount_off: null,
        email_offer_percentage_off: null,
        active_email_offer_ads_count: null,
        has_seller_provided_promo_code: null,
        is_offer_inactive_with_low_quality: null,
        is_recommended_offer: null,
        is_offer_manually_created_or_updated: null,
        merchant_domain_id: null,
      },
      u = (function (t) {
        function n() {
          var n,
            o = new (r("AdsPromoAdsEmailCaptureSettingStoreSource"))();
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
