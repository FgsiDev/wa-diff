__d(
  "AdsUEditorAdgroupSetVideoAssetsCagReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsMutators",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetVideoAssetsCagDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsVideoStore",
    "CreativeAssetGroupsMediaUtils",
    "FleixlbeFormatUtils",
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
            getVideo: r("AdsVideoStore").getSelector,
          },
          function (e, t, n) {
            var a = n.getVideo,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l, s, u, c, d;
                t.processThumbnail
                  ? (d = o(
                      "FleixlbeFormatUtils",
                    ).getCagVideoAssetsForFlexibleFormat(t.cagVideoAssets, a))
                  : (d = o(
                      "CreativeAssetGroupsMediaUtils",
                    ).getCagVideoAssetsForCAG(t.cagVideoAssets, a));
                var m = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).getCagGroupAtIndex(e, t.selectedIndex),
                  p = (l = m) == null ? void 0 : l.group_type;
                p === "dynamic" &&
                  ((t.selectedIndex = t.selectedIndex === 1 ? 0 : 1),
                  (m = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).getCagGroupAtIndex(e, t.selectedIndex)));
                var _ =
                    (s = (u = m) == null ? void 0 : u.videos) != null ? s : [],
                  f = d.map(function (e) {
                    var t;
                    return (t = _.find(function (t) {
                      return e.video_id != null && e.video_id === t.video_id;
                    })) != null
                      ? t
                      : e;
                  }),
                  g = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setSpecsInCagGroup(
                    e,
                    t.selectedIndex,
                    r("immutable").fromJS(f),
                    "videos",
                  ),
                  h =
                    o(
                      "AdsPCAUnifiedFormatEligibilityUtils",
                    ).isGKEnableForUnifiedMediaSetupFlow() &&
                    o(
                      "AdsPCAUnifiedFormatEligibilityUtils",
                    ).isMediaSourcePCAUnifiedFormat(
                      (c = g.metadata) == null
                        ? void 0
                        : c.adgroup_media_source,
                    );
                h &&
                  (g = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).deleteSpecsInCagGroup(g, t.selectedIndex, "images"));
                var y = r("nullthrows")(i.get(n));
                return (
                  t.selectedIndex === 0 &&
                    !h &&
                    (g = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).updateMediaSpecToCreativeSpec(g, y)),
                  g
                );
              },
            );
          },
          o("AdsUEditorAdgroupSetVideoAssetsCagDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
