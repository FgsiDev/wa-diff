__d(
  "AdsUEditorAdgroupRemoveVideoAtIndexReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveVideoAtIndexDataActionFlux",
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
            var a = n.plugins;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              return r("AdsAdgroupRecordAccessors")
                .creative.asset_feed_spec.videos.at(t.assetIndex)
                .delete(e);
            });
          },
          o("AdsUEditorAdgroupRemoveVideoAtIndexDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
