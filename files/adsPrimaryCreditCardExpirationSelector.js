__d(
  "adsPrimaryCreditCardExpirationSelector",
  [
    "AdsPEPrimaryCreditCardExpirationProvider",
    "adsCreateSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPEPrimaryCreditCardExpirationProvider").toFluxSelector(),
      s = r("adsCreateStoreSelector")(
        [],
        function (t) {
          return t;
        },
        { name: i.id + ".accountIDSelector" },
      ),
      u = r("adsCreateSelector")(
        [s, e],
        function (t, n) {
          var e = n.get(t);
          return e.isLoadingOrEmpty() ? null : e.getValue();
        },
        { name: i.id + ".adsPrimaryCreditCardExpirationSelector" },
      ),
      c = u;
    l.default = c;
  },
  98,
);
