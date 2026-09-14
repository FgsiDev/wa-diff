__d(
  "AdsUEditorAdgroupUseACODynamicVideoReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupUseACODynamicVideoDataActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o("AdsMutators").chain(
                r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images
                  .delete,
                r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.videos
                  .delete,
              )(e);
            });
          },
          o("AdsUEditorAdgroupUseACODynamicVideoDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
