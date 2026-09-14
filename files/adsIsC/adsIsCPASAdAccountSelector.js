__d(
  "adsIsCPASAdAccountSelector",
  [
    "AdsAccountStore",
    "AdsCPASAdAccountCheckProvider",
    "adsCreateSelector",
    "useAdsIsCPASAdAccount",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r("AdsCPASAdAccountCheckProvider").toFluxSelector(),
        ],
        function (t, n) {
          return o("useAdsIsCPASAdAccount").adsIsCPASAdAccountLogic(t, n);
        },
        { name: i.id + ".adsIsCPASAdAccountSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
