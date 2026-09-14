__d(
  "AdsUEditorAdgroupRemoveCustomizationHeadlineAtIndexReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveCustomizationHeadlineAtIndexActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUnifiedCreativeAPIFields",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorAdgroupReducerUtils").createReducer(
          {
            parentData: o(
              "AdsUEditorAdgroupSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorAdgroupAdObjectsUtils").getParentAdObjectsExtraData,
            ),
          },
          function (e, t, n) {
            var a = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                i = r("nullthrows")(a.get(e.id)),
                l = i.specPlugin,
                s = o(
                  "AdsPlacementAssetTargetingRuleUtils",
                ).getLabelNameFromAssetCustomizationPlacement(
                  e,
                  t.placements,
                  "title_label",
                ),
                u =
                  (n = o(
                    "AdsUEditorAdgroupHeadlineMutators",
                  ).getHeadlineAssetsFromLabel(e, s)) != null
                    ? n
                    : r("immutable").List(),
                c = o("AdsAssetFeedFieldUtils").findAssetIndex(
                  e,
                  l,
                  r("AdsUnifiedCreativeAPIFields").headline,
                  u.get(t.assetIndex),
                ),
                d = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
                  e,
                  l,
                  r("AdsUnifiedCreativeAPIFields").headline,
                  c,
                  "adlabels",
                  s,
                  !1,
                ),
                m = d.adgroupWithIsolatedAsset,
                p = d.isolatedAssetIndex;
              return r("AdsAdgroupRecordAccessors")
                .creative.asset_feed_spec.titles.at(p)
                .delete(m);
            });
          },
          o("AdsUEditorAdgroupRemoveCustomizationHeadlineAtIndexActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
