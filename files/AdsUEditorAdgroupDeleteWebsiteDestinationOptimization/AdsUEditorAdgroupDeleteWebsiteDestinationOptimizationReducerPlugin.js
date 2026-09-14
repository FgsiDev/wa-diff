__d(
  "AdsUEditorAdgroupDeleteWebsiteDestinationOptimizationReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupDeleteWebsiteDestinationOptimizationDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
              ).clearWebsiteDestinationOptimization(e);
            });
          },
          r(
            "AdsUEditorAdgroupDeleteWebsiteDestinationOptimizationDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
