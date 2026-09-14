__d(
  "AdsUEditorAdgroupSetVideoThumbnailIDReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetVideoThumbnailIDDataActionFlux",
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
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                return o("AdsUEditorAdgroupMutators").setVideoThumbnailID(
                  e,
                  r.get(n),
                  t.thumbnailID,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetVideoThumbnailIDDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
