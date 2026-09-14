__d(
  "AdsUEditorAdgroupSetVideoImageURLReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetVideoImageURLDataActionFlux",
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
                return o("AdsUEditorAdgroupMutators").setVideoImageURL(
                  e,
                  r.get(n),
                  t.imageURL,
                  t.thumbnailSource,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetVideoImageURLDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
