__d(
  "AdsUEditorAdgroupSetImageAssetsReducerPlugin",
  [
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetImageAssetsDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUnifiedCreativeAPIFields",
    "immutable",
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
              var n,
                i =
                  ((n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n.images) || r("immutable").List([]),
                l = t.imageAssets.map(function (e) {
                  var t =
                    i &&
                    i.find(function (t) {
                      var n = e.get("hash"),
                        r = e.get("url");
                      return (
                        (n != null && n === t.get("hash")) ||
                        (r != null && r === t.get("url"))
                      );
                    });
                  return t || e;
                });
              return o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
                e,
                a.get(e.id),
                r("AdsUnifiedCreativeAPIFields").imageHash,
                r("immutable").fromJS(l),
              );
            });
          },
          o("AdsUEditorAdgroupSetImageAssetsDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
