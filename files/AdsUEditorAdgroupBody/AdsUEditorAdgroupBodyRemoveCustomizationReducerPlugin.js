__d(
  "AdsUEditorAdgroupBodyRemoveCustomizationReducerPlugin",
  [
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupBodyRemoveCustomizationActionFlux",
    "AdsUEditorAdgroupReducerUtils",
    "AdsUEditorAdgroupSelectors",
    "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
    "adsUEditorAccountSelector",
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
              var n = r("nullthrows")(i.get(e.id)),
                l = n.specPlugin,
                s = r(
                  "adsPlacementAssetMutationConvertToPACSpecForAdditionalCustomizations",
                )(e, l, a),
                u = o(
                  "AdsPlacementAssetTargetingRuleUtils",
                ).getLabelNameFromAssetCustomizationPlacement(
                  e,
                  t.placements,
                  "body_label",
                );
              s = o(
                "AdsUEditorAdgroupBodyMutators",
              ).removeAdlabelFromBodyAssetGivenAdlabel(s, l, u);
              var c = o(
                "AdsUEditorAdgroupBodyMutators",
              ).getDefaultPlacementBodyAssetAndIndex(s);
              return (
                c &&
                  (s = o(
                    "AdsUEditorAdgroupBodyMutators",
                  ).updateBodyAssetLabelsAtIndex(s, l, u, c.index, c.index)),
                s
              );
            });
          },
          o("AdsUEditorAdgroupBodyRemoveCustomizationActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
