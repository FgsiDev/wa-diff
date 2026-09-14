__d(
  "AdsCAGEditMediaDialogUpdateAssetsCropsAndTrimSettingForCagGroupReducerPlugin",
  [
    "AdImageSpecCropKeys",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsCAGEditMediaDialogUpdateAssetsCropsAndTrimSettingForCagGroupActionFlux",
    "AdsCAGEditMediaUtils",
    "AdsImageInfoStoreUtils",
    "AdsMutators",
    "AdsPCAUnifiedFormatEligibilityUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsVideoStore",
    "FleixlbeFormatUtils",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var s = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            getVideo: r("AdsVideoStore").getSelector,
            plugins: o("AdsUEditorAdgroupSelectors").adObjectsList.mapTransform(
              o("AdsUEditorAdgroupSpecPathPluginAdObjectsUtils")
                .getAdgroupSpecPathPlugin,
            ),
          },
          function (t, n, a) {
            var i = a.getVideo,
              l = a.plugins;
            return o("AdsMutators").mutateEach(
              t,
              n.adgroupIDs,
              function (t, a) {
                var s,
                  u,
                  c,
                  d = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).getCagGroupAtIndex(t, n.cagGroupIndex),
                  m = (s = d == null ? void 0 : d.images) != null ? s : [],
                  p = m.map(function (t, a) {
                    var i,
                      l = babelHelpers.extends({}, (e(m[a]), m[a])),
                      s =
                        (i = n.imageAssetsChangeSet) == null
                          ? void 0
                          : i[a].crops,
                      u = {};
                    return (
                      s != null &&
                        (o("AdsCAGEditMediaUtils").getCropsKey(s) ===
                        r("AdImageSpecCropKeys").NO_CROP
                          ? (u.image_crops = void 0)
                          : (u.image_crops = r("immutable").fromJS(s))),
                      babelHelpers.extends({}, l, u)
                    );
                  }),
                  _ = o(
                    "AdsAdgroupCreativeAssetGroupsSpecMutators",
                  ).setSpecsInCagGroup(t, n.cagGroupIndex, p, "images"),
                  f = (u = d == null ? void 0 : d.videos) != null ? u : [],
                  g = f.map(function (e, t) {
                    var a,
                      l =
                        (a = n.videoAssetsChangeSet) == null ||
                        (a = a[t]) == null
                          ? void 0
                          : a.manualCropAndTrimResultVideoID;
                    if (l == null) return e;
                    var s = r(
                      "AdsImageInfoStoreUtils",
                    ).getVideoAssetFromVideoIDForCag(l);
                    return s == null
                      ? e
                      : ((s = o(
                          "FleixlbeFormatUtils",
                        ).getCagVideoAssetForFlexibleFormat(s, i)),
                        s != null ? s : e);
                  });
                _ = o(
                  "AdsAdgroupCreativeAssetGroupsSpecMutators",
                ).setSpecsInCagGroup(_, n.cagGroupIndex, g, "videos");
                var h =
                    o(
                      "AdsPCAUnifiedFormatEligibilityUtils",
                    ).isGKEnableForUnifiedMediaSetupFlow() &&
                    o(
                      "AdsPCAUnifiedFormatEligibilityUtils",
                    ).isMediaSourcePCAUnifiedFormat(
                      (c = _.metadata) == null
                        ? void 0
                        : c.adgroup_media_source,
                    ),
                  y = h && p.length === 0;
                return (
                  y &&
                    (_ = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).deleteSpecsInCagGroup(_, n.cagGroupIndex, "images")),
                  n.cagGroupIndex === 0 &&
                    !y &&
                    (_ = o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).updateMediaSpecToCreativeSpec(
                      _,
                      r("nullthrows")(l.get(a)),
                    )),
                  _
                );
              },
            );
          },
          r(
            "AdsCAGEditMediaDialogUpdateAssetsCropsAndTrimSettingForCagGroupActionFlux",
          ).actionType,
        ),
      },
      u = s;
    l.default = u;
  },
  98,
);
