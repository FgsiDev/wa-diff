__d(
  "AdsUEditorAdgroupSetImageCropsReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupImageMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetImageCropsDataActionFlux",
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
              function (e, n) {
                var i = r("nullthrows")(a.get(n));
                return o("AdsUEditorAdgroupImageMutators").setImageCrops(
                  t.imageCrops,
                  t.platform,
                  e,
                  i,
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetImageCropsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
