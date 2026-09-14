__d(
  "AdsUEditorAdgroupRemoveCustomizationBodyAtIndexReducerPlugin",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupRemoveCustomizationBodyAtIndexActionFlux",
    "AdsUEditorAdgroupSelectors",
    "AdsUnifiedCreativeAPIFields",
    "adsUEditorAccountSelector",
    "immutable",
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
          },
          function (e, t, n) {
            var a = n.account,
              i = n.parentData;
            return o("AdsMutators").mutateEach(e, t.adgroupIDs, function (e) {
              var n,
                a = r("nullthrows")(
                  i.get(e.id),
                  "AdsUEditorAdgroupRemoveCustomizationBodyAtIndexReducerPlugin: Parent data must exist for adgroup.",
                ),
                l = a.specPlugin,
                s = o(
                  "AdsPlacementAssetTargetingRuleUtils",
                ).getLabelNameFromAssetCustomizationPlacement(
                  e,
                  t.placements,
                  "body_label",
                ),
                u =
                  (n = o(
                    "AdsUEditorAdgroupBodyMutators",
                  ).getBodyAssetsFromLabel(e, s)) != null
                    ? n
                    : r("immutable").List(),
                c = o("AdsAssetFeedFieldUtils").findAssetIndex(
                  e,
                  l,
                  r("AdsUnifiedCreativeAPIFields").message,
                  u.get(t.assetIndex),
                ),
                d = o("AdsAssetFeedMutationUtils").isolateAssetWithLabel(
                  e,
                  l,
                  r("AdsUnifiedCreativeAPIFields").message,
                  c,
                  "adlabels",
                  s,
                  !1,
                ),
                m = d.adgroupWithIsolatedAsset,
                p = d.isolatedAssetIndex;
              return r("AdsAdgroupRecordAccessors")
                .creative.asset_feed_spec.bodies.at(p)
                .delete(m);
            });
          },
          o("AdsUEditorAdgroupRemoveCustomizationBodyAtIndexActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
