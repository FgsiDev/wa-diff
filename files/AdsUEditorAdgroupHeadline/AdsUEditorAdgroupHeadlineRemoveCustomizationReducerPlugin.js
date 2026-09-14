__d(
  "AdsUEditorAdgroupHeadlineRemoveCustomizationReducerPlugin",
  [
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAdObjectsUtils",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupHeadlineRemoveCustomizationActionFlux",
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
                  "title_label",
                );
              return (
                (s = o(
                  "AdsUEditorAdgroupHeadlineMutators",
                ).removeAdlabelFromHeadlineAssetGivenAdlabel(s, l, u)),
                (s = o(
                  "AdsUEditorAdgroupHeadlineMutators",
                ).copyDefaultPlacementHeadline(s, l, t.placements)),
                s
              );
            });
          },
          o("AdsUEditorAdgroupHeadlineRemoveCustomizationActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
