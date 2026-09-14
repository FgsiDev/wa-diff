__d(
  "AdsUEditorAdgroupUnsetPageWelcomeMessageReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorAdgroupUnsetPageWelcomeMessageDataActionFlux",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "nullthrows",
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
              var t = o(
                "AdsUEditorUnifiedCreationAdgroupMutators",
              ).clearPageWelcomeMessage(e);
              return (
                (t = r("AdsAdgroupSemanticFields").pageWelcomeMessage.delete(
                  r("nullthrows")(a.get(t.id)),
                  t,
                )),
                t
              );
            });
          },
          o("AdsUEditorAdgroupUnsetPageWelcomeMessageDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
