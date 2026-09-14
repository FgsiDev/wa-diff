__d(
  "adsSignalsPixelsSelector",
  [
    "AdsAccountStore",
    "LoadObject",
    "SignalsConversionAdAccountPixelDataProvider",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("SignalsConversionAdAccountPixelDataProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e, r("AdsAccountStore").getSelectedAccountID],
        function (t, n) {
          return n == null
            ? r("LoadObject").empty({ creatorModuleID: i.id })
            : t.get(n);
        },
        { name: i.id + ".selector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
