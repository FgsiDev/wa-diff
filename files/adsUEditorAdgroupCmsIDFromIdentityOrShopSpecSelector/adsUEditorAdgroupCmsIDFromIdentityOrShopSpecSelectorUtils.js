__d(
  "adsUEditorAdgroupCmsIDFromIdentityOrShopSpecSelectorUtils",
  ["AdsLoadObjectUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("AdsLoadObjectUtils")
        .all([e, t])
        .mapValue(function (e) {
          var t,
            n = e[0],
            r = e[1];
          return n === null
            ? r
            : n == null || (t = n.commerce_merchant_settings) == null
              ? void 0
              : t.id;
        });
    }
    l.adsUEditorAdgroupCmsIDFromIdentityOrShopSpec = e;
  },
  98,
);
