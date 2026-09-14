__d(
  "AdsSAOffCouponGuidanceModalReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e, r, o;
          return {
            couponAmountCents:
              (e = n.couponAmountCents) != null ? e : t.couponAmountCents,
            shouldShowSAOffCouponModal:
              (r = n.shouldShowSAOffCouponModal) != null
                ? r
                : t.shouldShowSAOffCouponModal,
            shouldShowSAOffOptimizedOnboardingModal:
              (o = n.shouldShowSAOffOptimizedOnboardingModal) != null
                ? o
                : t.shouldShowSAOffOptimizedOnboardingModal,
          };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
