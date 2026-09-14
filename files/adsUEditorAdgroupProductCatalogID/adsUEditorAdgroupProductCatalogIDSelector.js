__d(
  "adsUEditorAdgroupProductCatalogIDSelector",
  [
    "AdsAdgroupCatalogUIStore",
    "AdsUEditorSelectors",
    "ProductSetDataProvider",
    "adsCreateSelector",
    "adsStoreToSelector",
    "adsUEditorAdgroupProductCatalogIDLogic",
    "adsUEditorPcaUnificationSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsStoreToSelector")(r("AdsAdgroupCatalogUIStore")),
          o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
            return e.id;
          }),
        ],
        function (t, n) {
          return n.getValues().map(function (e) {
            return t.get(e);
          });
        },
        { name: i.id + ".adsAdgroupCatalogIDsUISelector" },
      ),
      s = r("adsCreateSelector")(
        [
          o("adsUEditorPcaUnificationSelectors")
            .bulkL3CatalogIDsForPcaUnificationSelector,
          o("AdsUEditorSelectors").adgroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.creative) == null ? void 0 : t.product_set_id;
          }),
          r("ProductSetDataProvider").toFluxSelector(),
          e,
        ],
        function (t, n, o, a) {
          return r("adsUEditorAdgroupProductCatalogIDLogic")(t, n, o, a);
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);
