__d(
  "AdsUEditorAdgroupRemoveShopsAdsOnlyFeaturesReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveShopsAdsOnlyFeaturesActionFlux",
    "AdsUEditorAdgroupShopAdsBundleMutators",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsMutators").chain(
                function (e) {
                  return o(
                    "AdsUEditorAdgroupShopAdsBundleMutators",
                  ).processShopAdsBundleEditorState(e, {
                    mode: "manual",
                    components: r("immutable").List([
                      { name: "AUTOMATED_PRODUCT_TAGS", enabled: !1 },
                      { name: "REASONS_TO_SHOP", enabled: !1 },
                    ]),
                  });
                },
                function (e) {
                  var t;
                  return ((t = e.creative) == null ||
                  (t = t.degrees_of_freedom_spec) == null ||
                  (t = t.creative_features_spec) == null
                    ? void 0
                    : t.product_extensions) == null
                    ? e
                    : o("AdsMutators").chain(
                        r("AdsAdgroupRecordAccessors").creative
                          .degrees_of_freedom_spec.creative_features_spec
                          .product_extensions.delete,
                        r("AdsAdgroupRecordAccessors").creative.product_set_id
                          .delete,
                      )(e);
                },
              )(e);
            });
          },
          r("AdsUEditorAdgroupRemoveShopsAdsOnlyFeaturesActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
