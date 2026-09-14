__d(
  "promoAdCouponCodeSourceUtils",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s(e) || u(e);
    }
    function s(e) {
      var t = [
        "AD_CREATIVE_DESCRIPTION",
        "AD_CREATIVE_HEADLINE",
        "AD_CREATIVE_PRIMARY_TEXT",
        "DETECTED_FROM_MERCHANT_ADS",
        "DETECTED_FROM_MERCHANT_WEBSITE",
        "DETECTED_FROM_MERCHANT_WEBSITE_URL",
        "PROVIDED_BY_MERCHANT",
      ];
      return e.some(function (e) {
        return t.includes(e);
      });
    }
    function u(e) {
      return e.includes("AD_CREATIVE_MANUAL_COUPON_CODES");
    }
    function c(e) {
      var t = [
        "AD_CREATIVE_DESCRIPTION",
        "AD_CREATIVE_HEADLINE",
        "AD_CREATIVE_PRIMARY_TEXT",
        "DETECTED_FROM_MERCHANT_ADS",
        "DETECTED_FROM_MERCHANT_WEBSITE",
        "DETECTED_FROM_MERCHANT_WEBSITE_URL",
        "PROVIDED_BY_MERCHANT",
        "AD_CREATIVE_MANUAL_COUPON_CODES",
      ];
      return e.some(function (e) {
        return t.includes(e);
      });
    }
    function d(e) {
      return (
        e.includes("EMAIL_CAPTURE_SHOPIFY") ||
        e.includes("EMAIL_CAPTURE_GENERIC_CODE")
      );
    }
    ((l.isPromoAdOptedIn = e),
      (l.isPromoAdAutomaticOptedIn = s),
      (l.isPromoAdManualOptedIn = u),
      (l.isPromoAdOptedInFromSources = c),
      (l.isEmailCaptureOptedInFromSources = d));
  },
  98,
);
