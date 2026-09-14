__d(
  "AdsUEditorAdgroupResetWebsiteDestinationOptimizationAlternativeURLReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupResetWebsiteDestinationOptimizationAlternativeURLDataActionFlux",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsUEditorAdgroupWebsiteDestinationOptimizationAlternateURLMutators",
              ).resetWebsiteDestinationOptimizationAlternativeURLStatus(e);
            });
          },
          r(
            "AdsUEditorAdgroupResetWebsiteDestinationOptimizationAlternativeURLDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
