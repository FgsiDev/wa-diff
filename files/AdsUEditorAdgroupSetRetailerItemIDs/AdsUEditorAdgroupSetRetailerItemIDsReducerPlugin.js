__d(
  "AdsUEditorAdgroupSetRetailerItemIDsReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetRetailerItemIDsDataActionFlux",
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
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var i = a.get(n);
                return r(
                  "AdsAdgroupSemanticFields",
                ).retailerItemIDs.isSupported(i, e)
                  ? o("AdsMutators").chain(
                      function (e) {
                        return r(
                          "AdsAdgroupSemanticFields",
                        ).retailerItemIDs.set(i, e, t.retailerItemIDs);
                      },
                      function (e) {
                        return r(
                          "AdsAdgroupSemanticFields",
                        ).collectionThumbnails.delete(i, e);
                      },
                    )(e)
                  : e;
              },
            );
          },
          o("AdsUEditorAdgroupSetRetailerItemIDsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
