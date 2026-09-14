__d(
  "adsPaymentsPaymentMethodIsCreditCardExpired",
  ["AdsPayAPIPaymentMethodCreditCardFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Date(),
        n = new Date(
          Number.parseInt(
            e[r("AdsPayAPIPaymentMethodCreditCardFields").EXP_YEAR],
            10,
          ),
          Number.parseInt(
            e[r("AdsPayAPIPaymentMethodCreditCardFields").EXP_MONTH],
            10,
          ),
        );
      return t > n;
    }
    l.default = e;
  },
  98,
);
