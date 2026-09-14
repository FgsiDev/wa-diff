__d(
  "AdsUEditorAdgroupCallbackClearReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupCallbackClearActionFlux",
    "AdsUEditorAdgroupCallbackMutator",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
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
          function (e, t) {
            var n = t.adgroupIDs || [];
            return o("AdsMutators").mutateEach(e, n, function (e, t) {
              return o(
                "AdsUEditorAdgroupCallbackMutator",
              ).cleanCallAdsConfiguration(e);
            });
          },
          o("AdsUEditorAdgroupCallbackClearActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
