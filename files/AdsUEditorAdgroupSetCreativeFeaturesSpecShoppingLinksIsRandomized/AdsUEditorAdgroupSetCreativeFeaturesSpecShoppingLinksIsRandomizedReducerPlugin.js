__d(
  "AdsUEditorAdgroupSetCreativeFeaturesSpecShoppingLinksIsRandomizedReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCreativeFeaturesSpecShoppingLinksIsRandomizedActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = function (n) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.customizations.shopping_links_randomized_order.set(
                t.is_shopping_links_randomized_order,
                n,
              );
            };
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, n);
          },
          o(
            "AdsUEditorAdgroupSetCreativeFeaturesSpecShoppingLinksIsRandomizedActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
