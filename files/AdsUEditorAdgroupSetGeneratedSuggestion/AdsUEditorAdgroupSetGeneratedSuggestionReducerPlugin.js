__d(
  "AdsUEditorAdgroupSetGeneratedSuggestionReducerPlugin",
  [
    "AdsMutators",
    "AdsTextGenerationSetSuggestionsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetGeneratedSuggestionActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "adsUEditorAccountSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var r = n.account,
              a = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return o(
                "AdsTextGenerationSetSuggestionsUtils",
              ).getHandleSuggestionsMutation(
                e,
                r,
                t.suggestions,
                a,
                t.eventSource,
              );
            });
          },
          o("AdsUEditorAdgroupSetGeneratedSuggestionActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
