__d(
  "adsUEditorProductCatalogVerticalSelector",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupCatalogUIStore",
    "AdsAdgroupSemanticFields",
    "AdsLoadStateUtils_LEGACY",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "ProductCatalogExpensiveStore",
    "ProductSetDataProvider",
    "adsCreateSelector",
    "adsIsSAInDAEnabledSelector",
    "adsStoreToSelector",
    "adsUEditorAdObjectsForSelectedAdgroupsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
    "firstx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdObjectsForSelectedAdgroupsSelector"),
          r("ProductCatalogExpensiveStore").getSelector,
          r("ProductSetDataProvider").toFluxSelector(),
          r("adsStoreToSelector")(r("AdsAdgroupCatalogUIStore")),
          r("adsUEditorSelectedCampaignPlainObjectsSelector"),
          r("adsIsSAInDAEnabledSelector"),
        ],
        function (t, n, a, i, l, s) {
          if (t.length === 0) return null;
          var e = r("firstx")(t),
            u = e.adgroup,
            c = o("AdsAPIAdgroupRecordUtils").getID(u),
            d = r("AdsAdgroupSemanticFields").productSetID.get(
              o(
                "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
              ).getAdgroupSpecPathPlugin(e),
              u,
            );
          if (d == null && s) {
            var m;
            d = (m = l[0].promoted_object) == null ? void 0 : m.product_set_id;
          }
          var p = r("isTruthy")(d) ? a.get(d) : null,
            _ =
              i.get(c) ||
              (p && p.hasValue() ? p.getValueEnforcing().catalogID : null),
            f = r("isTruthy")(_) ? n(_) : null;
          return f && o("AdsLoadStateUtils_LEGACY").isLoaded(f)
            ? f.vertical
            : null;
        },
        { name: i.id + ".adsUEditorProductCatalogVerticalSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
