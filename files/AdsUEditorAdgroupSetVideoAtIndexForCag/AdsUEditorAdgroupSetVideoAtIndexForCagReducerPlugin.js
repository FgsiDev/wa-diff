__d(
  "AdsUEditorAdgroupSetVideoAtIndexForCagReducerPlugin",
  [
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsImageInfoStoreUtils",
    "AdsMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetVideoAtIndexForCagDataActionFlux",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsVideoStore",
    "FleixlbeFormatUtils",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            getVideo: r("AdsVideoStore").getSelector,
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (e, t, n) {
            var a = n.getVideo,
              i = n.plugins;
            return o("AdsMutators").mutateEach(
              e,
              t.adgroupIDs,
              function (e, n) {
                var l = r(
                  "AdsImageInfoStoreUtils",
                ).getVideoAssetFromVideoIDForCag(t.videoID);
                return l == null
                  ? e
                  : (t.processThumbnail &&
                      (l = o(
                        "FleixlbeFormatUtils",
                      ).getCagVideoAssetForFlexibleFormat(l, a)),
                    o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).setVideoAtIndex(
                      e,
                      t.groupIndex,
                      t.assetIndex,
                      r("immutable").fromJS(l),
                      r("nullthrows")(i.get(n)),
                    ));
              },
            );
          },
          o("AdsUEditorAdgroupSetVideoAtIndexForCagDataActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
