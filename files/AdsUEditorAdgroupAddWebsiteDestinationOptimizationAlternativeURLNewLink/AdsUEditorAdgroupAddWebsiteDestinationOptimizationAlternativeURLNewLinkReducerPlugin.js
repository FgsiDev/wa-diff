__d(
  "AdsUEditorAdgroupAddWebsiteDestinationOptimizationAlternativeURLNewLinkReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAddWebsiteDestinationOptimizationAlternativeURLNewLinkDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
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
              ).addWebsiteDestinationOptimizationAlternativeURLNewLink(
                e,
                t.newURL,
                t.newValueWeight,
                t.newValueWeightDirection,
              );
            });
          },
          r(
            "AdsUEditorAdgroupAddWebsiteDestinationOptimizationAlternativeURLNewLinkDataActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
