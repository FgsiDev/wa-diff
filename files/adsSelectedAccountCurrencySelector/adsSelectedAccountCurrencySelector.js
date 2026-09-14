__d(
  "adsSelectedAccountCurrencySelector",
  [
    "AdsAccountStore",
    "adsCreateSelector",
    "adsSelectedAccountCurrencySelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount],
        function (t) {
          return o(
            "adsSelectedAccountCurrencySelectorUtils",
          ).adsSelectedAccountCurrency(t);
        },
        { name: i.id + ".adsSelectedAccountCurrencySelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
