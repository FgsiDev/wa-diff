__d(
  "AdsUEditorAdgroupSetMultiCustomizationVideosReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUEditorAdgroupSetMultiCustomizationVideosDataActionFlux",
    "adsUEditorAccountSelector",
    "adsUEditorAdgroupOMPVideoCropMutator",
    "adsUEditorPlacementCustomizationCanUseMixedFormatsSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
            canUseMixedFormats: r(
              "adsUEditorPlacementCustomizationCanUseMixedFormatsSelector",
            ),
          },
          function (e, t, n) {
            var a = n.account,
              i = n.canUseMixedFormats,
              l = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n = r("nullthrows")(l.get(e.id)),
                o = n.campaign,
                s = n.campaignGroup,
                u = n.specPlugin,
                c = t.assetGroupsMap,
                d = t.customizationMap,
                m = t.isVideoAdjustmentsEnabled;
              return r("adsUEditorAdgroupOMPVideoCropMutator")(
                e,
                s,
                a,
                i,
                o,
                u,
                c,
                d,
                m,
              );
            });
          },
          o("AdsUEditorAdgroupSetMultiCustomizationVideosDataActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
