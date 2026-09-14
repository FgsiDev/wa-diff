__d(
  "AdsUEditorAdgroupAddCustomizationHeadlineAtIndexReducerPlugin",
  [
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddCustomizationHeadlineAtIndexActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "AdsUnifiedCreativeAPIFields",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
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
                l,
                s = r("nullthrows")(i.get(e.id)),
                u = s.specPlugin,
                c = r(
                  "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
                )(e, u, a),
                d = o(
                  "AdsPlacementAssetTargetingRuleUtils",
                ).getLabelNameFromAssetCustomizationPlacement(
                  c,
                  t.placements,
                  "title_label",
                ),
                m =
                  (n =
                    (l = c.creative) == null || (l = l.asset_feed_spec) == null
                      ? void 0
                      : l.titles) != null
                    ? n
                    : r("immutable").List(),
                p = m.size;
              return (
                (c = o(
                  "AdsAssetFeedMutationUtils",
                ).insertAssetValueWithLabelAtIndex(
                  c,
                  u,
                  r("AdsUnifiedCreativeAPIFields").headline,
                  "text",
                  t.assetValue,
                  "adlabels",
                  d,
                  p,
                )),
                c
              );
            });
          },
          o("AdsUEditorAdgroupAddCustomizationHeadlineAtIndexActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
