__d(
  "AdsUEditorAdgroupSetCreativeFeaturesSpecMediaOrderReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetCreativeFeaturesSpecMediaOrderActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return t.enrollStatus == null
                ? r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.media_order.delete(
                    e,
                  )
                : r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.degrees_of_freedom_spec.creative_features_spec.media_order.enroll_status.set(
                    t.enrollStatus,
                    e,
                  );
            });
          },
          r("AdsUEditorAdgroupSetCreativeFeaturesSpecMediaOrderActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
