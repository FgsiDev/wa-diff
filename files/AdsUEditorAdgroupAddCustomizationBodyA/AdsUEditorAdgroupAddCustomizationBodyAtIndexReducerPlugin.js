__d(
  "AdsUEditorAdgroupAddCustomizationBodyAtIndexReducerPlugin",
  [
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedMutationUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupAddCustomizationBodyAtIndexActionFlux",
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
                  "body_label",
                ),
                m =
                  (n =
                    (l = c.creative) == null || (l = l.asset_feed_spec) == null
                      ? void 0
                      : l.bodies) != null
                    ? n
                    : r("immutable").List(),
                p = m.size,
                _ = m.findIndex(function (e) {
                  return e.get("text") === t.assetValue;
                });
              if (_ !== -1 && t.assetValue != "") {
                var f,
                  g,
                  h =
                    (f =
                      (g = c.creative) == null ||
                      (g = g.asset_feed_spec) == null
                        ? void 0
                        : g.bodies) != null
                      ? f
                      : r("immutable").List(),
                  y = r("nullthrows")(h.get(_));
                ((h = h.push(y).delete(_)),
                  (c = r("AdsAdgroupSemanticFields").message.set(u, c, h)));
              } else
                c = o(
                  "AdsAssetFeedMutationUtils",
                ).insertAssetValueWithLabelAtIndex(
                  c,
                  u,
                  r("AdsUnifiedCreativeAPIFields").message,
                  "text",
                  t.assetValue,
                  "adlabels",
                  d,
                  p,
                );
              return c;
            });
          },
          o("AdsUEditorAdgroupAddCustomizationBodyAtIndexActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
