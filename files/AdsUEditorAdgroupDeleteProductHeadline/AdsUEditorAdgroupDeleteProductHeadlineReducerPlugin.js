__d(
  "AdsUEditorAdgroupDeleteProductHeadlineReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupDeleteProductHeadlineDataActionFlux",
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
              ).creative.creative_sourcing_spec.product_media_metadata_spec.headline.delete(
                e,
              );
            });
          },
          r("AdsUEditorAdgroupDeleteProductHeadlineDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
