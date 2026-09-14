__d(
  "adsUEditorAdgroupCommerceMerchantSettingsFromIdentityLoadObjectSelector",
  [
    "AdsBulkValueUtils",
    "adsCreateSelector",
    "adsUEditorAdgroupUniversalStorefrontsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        o("adsUEditorAdgroupUniversalStorefrontsSelector")
          .adsUEditorAdgroupUniversalStorefrontsSelector,
      ],
      function (t) {
        return s(t);
      },
      {
        name:
          i.id +
          ".adsUEditorAdgroupCommerceMerchantSettingsFromIdentityLoadObjectSelector",
      },
    );
    function s(e) {
      return e.mapValue(function (e) {
        return o("AdsBulkValueUtils").getUniformValue(
          o("AdsBulkValueUtils").mapBulkValue(e, function (e) {
            if (!e) return null;
            var t = e.facebookStorefront,
              n = e.instagramStorefront,
              r = t == null ? void 0 : t.commerce_merchant_settings,
              o = n == null ? void 0 : n.commerce_merchant_settings;
            return (r == null ? void 0 : r.id) == null
              ? (o == null ? void 0 : o.id) != null
                ? {
                    id: o.id,
                    shop_catalog: n == null ? void 0 : n.shop_catalog,
                  }
                : null
              : (o == null ? void 0 : o.id) == null
                ? {
                    id: r.id,
                    shop_catalog: t == null ? void 0 : t.shop_catalog,
                  }
                : r.id === o.id
                  ? {
                      id: r.id,
                      shop_catalog: t == null ? void 0 : t.shop_catalog,
                    }
                  : null;
          }),
          null,
        );
      });
    }
    ((l.adsUEditorAdgroupCommerceMerchantSettingsFromIdentityLoadObjectSelector =
      e),
      (l.adsUEditorAdgroupCommerceMerchantSettingsFromIdentityLoadObject = s));
  },
  98,
);
