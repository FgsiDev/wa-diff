__d(
  "AdsUEditorAdgroupCollaborativeAdsProductSetCreativeReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupCollaborativeAdsProductSetCreativeActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "ApiAdObjectTypes",
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
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.product_set_id.set(t.productSetID, e);
                },
                function (e) {
                  return r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.object_type.set(r("ApiAdObjectTypes").SHARE, e);
                },
              )(e);
            });
          },
          o("AdsUEditorAdgroupCollaborativeAdsProductSetCreativeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
