__d(
  "adsUEditorAdgroupShopSpecSelectedShopSelector",
  [
    "AdsUEditorSelectors",
    "LoadObject",
    "ShopsAdsSelectedShopDataProvider",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsGetUniformValueSelector")(
          o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null || (t = t.shop_spec) == null
              ? void 0
              : t.shop_id;
          }),
          null,
        ),
      ],
      function (t) {
        return t;
      },
      { name: i.id + ".adsUEditorAdgroupShopSpecSelectedShopIDSelector" },
    );
    function s(e) {
      return e;
    }
    var u = r("adsCreateSelector")(
      [e, r("ShopsAdsSelectedShopDataProvider").toFluxSelector()],
      function (t, n) {
        return c(t, n);
      },
      { name: i.id + ".adsUEditorAdgroupShopSpecSelectedShopSelector" },
    );
    function c(e, t) {
      return e == null
        ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
        : t.get(e);
    }
    ((l.adsUEditorAdgroupShopSpecSelectedShopIDSelector = e),
      (l.adsUEditorAdgroupShopSpecSelectedShopID = s),
      (l.adsUEditorAdgroupShopSpecSelectedShopSelector = u),
      (l.adsUEditorAdgroupShopSpecSelectedShop = c));
  },
  98,
);
