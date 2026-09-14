__d(
  "AdsUEditorAdgroupSetImageAssetsCagReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetImageAssetsCagDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "immutable",
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
                var i,
                  l,
                  s,
                  u = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).getCagGroupAtIndex(e, t.selectedIndex),
                  c = (i = u) == null ? void 0 : i.group_type;
                c === "dynamic" &&
                  ((t.selectedIndex = t.selectedIndex === 1 ? 0 : 1),
                  (u = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).getCagGroupAtIndex(e, t.selectedIndex)));
                var d =
                    (l = (s = u) == null ? void 0 : s.images) != null ? l : [],
                  m = t.cagImageAssets.map(function (e) {
                    var t;
                    return (t = d.find(function (t) {
                      return (
                        (e.hash != null && e.hash === t.hash) ||
                        (e.url != null && e.url === t.url)
                      );
                    })) != null
                      ? t
                      : e;
                  }),
                  p = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setSpecsInCagGroup(
                    e,
                    t.selectedIndex,
                    r("immutable").fromJS(m),
                    "images",
                  );
                if (t.selectedIndex === 0) {
                  var _ = r("nullthrows")(a.get(n));
                  p = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).updateMediaSpecToCreativeSpec(p, _);
                }
                return p;
              },
            );
          },
          o("AdsUEditorAdgroupSetImageAssetsCagDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
