__d(
  "AdsUEditorAdgroupSetWebsiteDestinationOptimizationAlternativeURLReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSetWebsiteDestinationOptimizationAlternativeURLDataActionFlux",
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
              ).setWebsiteDestinationOptimizationAlternativeURLStatus(
                e,
                t.urlFromSourcing,
              );
            });
          },
          r(
            "AdsUEditorAdgroupSetWebsiteDestinationOptimizationAlternativeURLDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
