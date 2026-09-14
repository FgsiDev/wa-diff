__d(
  "AdsUEditorAdgroupCallExtensionClearPhoneDataReducerPlugin",
  [
    "AdsCallAddonUtils",
    "AdsMutators",
    "AdsUEditorAdgroupCallExtensionClearDataActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
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
            var a = n.plugins,
              i = t.adgroupIDs || [];
            return o("AdsMutators").mutateEach(e, i, function (e, t) {
              return o("AdsCallAddonUtils").clearCallExtensionFields(
                e,
                r("nullthrows")(a.get(t)),
              );
            });
          },
          o("AdsUEditorAdgroupCallExtensionClearDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
