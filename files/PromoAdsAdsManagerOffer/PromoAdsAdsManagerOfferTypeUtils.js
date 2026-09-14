__d(
  "PromoAdsAdsManagerOfferTypeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.map(function (e) {
        var t, n;
        return {
          id: e.id,
          coupon_code: (t = e.public_coupon_code) == null ? void 0 : t.code,
          fixed_amount_off:
            (n = e.fixed_amount_off) == null ? void 0 : n.amount,
          percent_off: e.percent_off,
          value_type: e.value_type,
          sources: new Set(e.detection_sources),
        };
      });
    }
    i.convertToCouponCodesForPromotionalMetadata = e;
  },
  66,
);
