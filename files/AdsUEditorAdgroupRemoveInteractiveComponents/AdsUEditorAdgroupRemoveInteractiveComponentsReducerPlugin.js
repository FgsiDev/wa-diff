__d(
  "AdsUEditorAdgroupRemoveInteractiveComponentsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveInteractiveComponentsDataActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, r) {
                var a = e;
                return (
                  (a = o(
                    "AdsUEditorAdgroupWebsiteDestinationOptimizationMutators",
                  ).clearWebsiteDestinationOptimization(a)),
                  o(
                    "AdsUEditorAdgroupInteractiveComponentsSpecMutators",
                  ).removeInteractiveComponents(a, r, t.assetIndex, n)
                );
              },
            );
          },
          o("AdsUEditorAdgroupRemoveInteractiveComponentsDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
