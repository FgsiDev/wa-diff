__d(
  "AdsUEditorAdgroupRemoveDLOReducerPlugin",
  [
    "AdsAssetFeedUtils",
    "AdsMutators",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveDLODataActionFlux",
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
            var a = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, t) {
                if (!o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e)) return e;
                var n = r("nullthrows")(a.get(t));
                return o(
                  "AdsUEditorAdgroupAssetFeedMutators",
                ).convertFromAssetFeedSpec(
                  o("AdsAssetFeedUtils").getTargetObjectType(e),
                  e,
                  r("nullthrows")(n.pivots.objective),
                );
              },
            );
          },
          o("AdsUEditorAdgroupRemoveDLODataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
