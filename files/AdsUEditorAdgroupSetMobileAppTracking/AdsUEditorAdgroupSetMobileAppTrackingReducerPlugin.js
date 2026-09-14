__d(
  "AdsUEditorAdgroupSetMobileAppTrackingReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetMobileAppTrackingDataActionFlux",
    "AdsUEditorAdgroupTrackingSpecMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.adgroupIDs,
              r = t.appID,
              a = t.datasetSplitID;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o(
                "AdsUEditorAdgroupTrackingSpecMutators",
              ).setMobileAppTracking(r, e, a);
            });
          },
          o("AdsUEditorAdgroupSetMobileAppTrackingDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
