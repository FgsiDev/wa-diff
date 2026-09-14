__d(
  "AdsUEditorAdgroupSetCreativeFlexFeatureAwareReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCreativeFlexFeatureAwareActionFlux",
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
              ).is_creative_flex_feature_aware.set(!0)(e);
            });
          },
          r("AdsUEditorAdgroupSetCreativeFlexFeatureAwareActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
