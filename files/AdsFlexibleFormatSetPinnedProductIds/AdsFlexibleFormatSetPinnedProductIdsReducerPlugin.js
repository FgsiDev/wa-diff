__d(
  "AdsFlexibleFormatSetPinnedProductIdsReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsFlexibleFormatSetPinnedProductIdsActionFlux",
    "AdsMutators",
    "AdsPEPinnedProductIdListUtils",
    "AdsUEditorAdgroupReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = o(
              "AdsPEPinnedProductIdListUtils",
            ).getAdsPEPinnedProductsCap();
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.creative_sourcing_spec.product_media_metadata_spec.pinned_product_ids.set(
                r("immutable").List(t.pinnedProductIDs.slice(0, n)),
                e,
              );
            });
          },
          [r("AdsFlexibleFormatSetPinnedProductIdsActionFlux").actionType],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
