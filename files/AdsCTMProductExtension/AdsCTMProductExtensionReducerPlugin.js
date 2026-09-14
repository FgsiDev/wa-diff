__d(
  "AdsCTMProductExtensionReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsCTMProductExtensionActionFlux",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.associated_product_set_id.set(
                t.productSetID,
                e,
              );
            });
          },
          r("AdsCTMProductExtensionActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
