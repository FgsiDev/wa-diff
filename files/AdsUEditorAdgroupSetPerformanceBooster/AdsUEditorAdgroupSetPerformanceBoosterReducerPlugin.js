__d(
  "AdsUEditorAdgroupSetPerformanceBoosterReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetPerformanceBoosterDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "isFalsey",
    "nullthrows",
    "setByPath",
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
            var a = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("nullthrows")(a.get(e.id)),
                o = r("AdsAdgroupSemanticFields").pageWelcomeMessage.get(n, e);
              if (r("isFalsey")(o)) return e;
              var i = JSON.parse(o);
              return (
                t.isUserEditing != null &&
                  r("setByPath")(i, ["is_user_editing"], t.isUserEditing),
                t.isPerformanceBoosterEnabled != null &&
                  r("setByPath")(
                    i,
                    ["performance_booster_enabled"],
                    t.isPerformanceBoosterEnabled,
                  ),
                r("AdsAdgroupSemanticFields").pageWelcomeMessage.set(
                  r("nullthrows")(a.get(e.id)),
                  e,
                  JSON.stringify(i),
                )
              );
            });
          },
          o("AdsUEditorAdgroupSetPerformanceBoosterDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
