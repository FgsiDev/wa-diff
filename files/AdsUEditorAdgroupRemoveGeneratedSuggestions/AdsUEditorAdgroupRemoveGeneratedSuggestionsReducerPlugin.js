__d(
  "AdsUEditorAdgroupRemoveGeneratedSuggestionsReducerPlugin",
  [
    "AdsMutators",
    "AdsTextGenerationSetSuggestionsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveGeneratedSuggestionsActionFlux",
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
          function (e, t, n) {
            var r = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsTextGenerationSetSuggestionsUtils",
              ).removeGeneratedSuggestions(e, "bodies", t.defaultAddOnly, r);
            });
          },
          o("AdsUEditorAdgroupRemoveGeneratedSuggestionsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
