__d(
  "AdsUEditorAdgroupSetTextAutomationStatusReducerPlugin",
  [
    "AdsMutators",
    "AdsTextGenerationSetSuggestionsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetTextAutomationStatusActionFlux",
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
          function (e, t, n) {
            var r = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsTextGenerationSetSuggestionsUtils",
              ).setTextAutomationStatus(
                e,
                "bodies",
                r,
                t.isTextAutomationEnabled,
              );
            });
          },
          r("AdsUEditorAdgroupSetTextAutomationStatusActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
