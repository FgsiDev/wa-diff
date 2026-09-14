__d(
  "AdsUEditorAdgroupSetProductLevelReportingTrackingSpecReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAddProductLevelReportingTrackingActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupTrackingSpecMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupTrackingSpecMutators",
              ).setProductLevelReportingTracking(t.productSetID, e);
            });
          },
          r("AdsUEditorAdgroupAddProductLevelReportingTrackingActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
