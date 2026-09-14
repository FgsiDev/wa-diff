__d(
  "AdsUEditorAdgroupUpdateWebsiteDestinationOptimizationAlternativeURLLinkValueReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupUpdateWebsiteDestinationOptimizationAlternativeURLLinkValueDataActionFlux",
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
              ).updateWebsiteDestinationOptimizationAlternativeURLLinkValue(
                e,
                t.index,
                t.newUrl,
              );
            });
          },
          r(
            "AdsUEditorAdgroupUpdateWebsiteDestinationOptimizationAlternativeURLLinkValueDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
