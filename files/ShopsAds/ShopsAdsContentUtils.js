__d(
  "ShopsAdsContentUtils",
  ["fbt", "AdsCurrencyFormatter", "AdsUEditorShopsAdsActivationConstants"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      t === void 0 && (t = !0);
      var n = o("AdsCurrencyFormatter").formatCurrencyWithNumberDelimiters(
        o("AdsUEditorShopsAdsActivationConstants").SAIP_COUPON_CURRENCY,
        e,
        t,
      );
      return s._(/*BTDS*/ "USD {coupon_amount}", [
        s._param("coupon_amount", n),
      ]);
    }
    l.getCouponAmountText = e;
  },
  226,
);
