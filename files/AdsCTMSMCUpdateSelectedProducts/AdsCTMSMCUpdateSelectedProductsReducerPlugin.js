__d(
  "AdsCTMSMCUpdateSelectedProductsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCTMSMCProductSelectorUtils",
    "AdsCTMSMCUpdateSelectedProductsActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "adsUEditorCTMCatalogProductMutatorUtils",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.action ===
              o("AdsCTMSMCProductSelectorUtils")
                .CTMSMCUpdateSelectedProductsAction.DELETE
              ? o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  var n =
                    t.isExistingPost || (t.isPAC === !0 && r("gkx")("12583"))
                      ? r("AdsAdgroupRecordAccessors").creative.product_data
                      : r("AdsAdgroupRecordAccessors").creative
                          .object_story_spec.product_data;
                  return n.set(
                    o(
                      "adsUEditorCTMCatalogProductMutatorUtils",
                    ).getPlaceholderProductData(),
                    e,
                  );
                })
              : o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
                  var n = r("immutable").List(
                      Array.from(t.selectedProducts).map(function (e) {
                        return r("immutable").Map({
                          product_id: e.product_id,
                          product_source: e.product_source,
                          product_decision: e.product_decision,
                        });
                      }),
                    ),
                    o = t.isExistingPost
                      ? r("AdsAdgroupRecordAccessors").creative.product_data
                      : r("AdsAdgroupRecordAccessors").creative
                          .object_story_spec.product_data;
                  return o.set(n, e);
                });
          },
          r("AdsCTMSMCUpdateSelectedProductsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
