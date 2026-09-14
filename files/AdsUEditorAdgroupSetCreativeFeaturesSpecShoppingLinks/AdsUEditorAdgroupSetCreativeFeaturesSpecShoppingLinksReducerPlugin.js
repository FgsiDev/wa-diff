__d(
  "AdsUEditorAdgroupSetCreativeFeaturesSpecShoppingLinksReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCreativeFeaturesSpecShoppingLinksActionFlux",
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
              ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.customizations.is_shopping_links.set(
                t.is_shopping_links,
                n,
              );
            };
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, n);
          },
          o("AdsUEditorAdgroupSetCreativeFeaturesSpecShoppingLinksActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
