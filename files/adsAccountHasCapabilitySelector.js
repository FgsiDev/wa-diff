__d(
  "adsAccountHasCapabilitySelector",
  [
    "AdsAccountHasCapabilityQueryProvider",
    "AdsAccountStore",
    "LoadObject",
    "adsCreateSelector",
    "err",
    "memoizeStringOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeStringOnly")(function (e) {
        return r("adsCreateSelector")(
          [
            r("AdsAccountStore").getSelectedAccountID,
            r("AdsAccountHasCapabilityQueryProvider").toFluxSelector(),
          ],
          function (n, o) {
            if (n == null)
              return r("LoadObject").withError(r("err")("Account ID is null"), {
                creatorModuleID: i.id,
              });
            var t = o.get({ accountID: n, capability: e });
            return t.mapValue(function (e) {
              var t, n;
              return (t =
                (n = e.ad_account) == null ? void 0 : n.has_capability) != null
                ? t
                : !1;
            });
          },
          { name: i.id },
        );
      }),
      s = e;
    l.default = s;
  },
  98,
);
